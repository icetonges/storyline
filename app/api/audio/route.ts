import { NextResponse } from "next/server";
import { getNarration, getStory } from "@/lib/stories";
import { isAudiobookVoice } from "@/lib/audio";

const localRequests = new Map<string, number[]>();
const audioCache = new Map<string, ArrayBuffer>();
const MAX_AUDIO_CACHE_ENTRIES = 20;

function isLocallyRateLimited() {
  const key = "local";
  const now = Date.now();
  const recent = (localRequests.get(key) || []).filter((time) => now - time < 60_000);
  recent.push(now);
  localRequests.set(key, recent);
  return recent.length > 10;
}

async function isRateLimited(request: Request) {
  if (process.env.NODE_ENV !== "production") return isLocallyRateLimited();

  const clientIp = request.headers.get("x-nf-client-connection-ip");
  if (!clientIp || !process.env.NETLIFY_DB_URL) return true;

  try {
    const [{ getConnectionString }, { default: postgres }] = await Promise.all([
      import("@netlify/database"),
      import("postgres"),
    ]);
    const sql = postgres(getConnectionString());
    try {
      const [result] = await sql`
        INSERT INTO audio_rate_limits (client_key, window_started_at, request_count)
        VALUES (${clientIp}, date_trunc('minute', now()), 1)
        ON CONFLICT (client_key, window_started_at)
        DO UPDATE SET request_count = audio_rate_limits.request_count + 1
        RETURNING request_count
      `;
      return Number(result.request_count) > 10;
    } finally {
      await sql.end();
    }
  } catch {
    return true;
  }
}

function cacheAudio(key: string, audio: ArrayBuffer) {
  if (audioCache.size >= MAX_AUDIO_CACHE_ENTRIES) {
    const oldestKey = audioCache.keys().next().value;
    if (oldestKey) audioCache.delete(oldestKey);
  }
  audioCache.set(key, audio);
}

export async function POST(request: Request) {
  if (!process.env.OPENAI_API_KEY) return NextResponse.json({ fallback: "browser" }, { status: 503 });
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  try {
    if (origin && host && new URL(origin).host !== host) return NextResponse.json({ error: "Cross-origin narration is not allowed" }, { status: 403 });
  } catch {
    return NextResponse.json({ error: "Invalid origin" }, { status: 400 });
  }
  if (await isRateLimited(request)) return NextResponse.json({ error: "Too many narration requests", code: "rate_limited" }, { status: 429, headers: { "retry-after": "60" } });
  const body = await request.json().catch(() => ({}));
  const storySlug = typeof body.storySlug === "string" ? body.storySlug : "";
  const story = getStory(storySlug);
  if (!story) return NextResponse.json({ error: "Unknown story" }, { status: 400 });
  const sectionId = typeof body.sectionId === "string" ? body.sectionId : "";
  if (!sectionId) return NextResponse.json({ error: "Chapter is required" }, { status: 400 });
  if (!story.sections.some((section) => section.id === sectionId)) return NextResponse.json({ error: "Unknown chapter" }, { status: 400 });
  const voice = body.voice ?? process.env.OPENAI_AUDIO_VOICE ?? "marin";
  if (!isAudiobookVoice(voice)) return NextResponse.json({ error: "Unknown narrator voice" }, { status: 400 });
  const model = process.env.OPENAI_AUDIO_MODEL || "gpt-4o-mini-tts";
  const cacheKey = `${model}:${storySlug}:${sectionId}:${voice}`;
  const cached = audioCache.get(cacheKey);
  if (cached) return new NextResponse(cached.slice(0), { headers: { "content-type": "audio/mpeg", "x-audio-cache": "hit" } });

  const response = await fetch("https://api.openai.com/v1/audio/speech", {
    method: "POST",
    headers: { authorization: `Bearer ${process.env.OPENAI_API_KEY}`, "content-type": "application/json" },
    body: JSON.stringify({
      model,
      voice,
      input: getNarration(storySlug, sectionId),
      instructions: story.locale === "zh-CN" ? "使用温暖、自然、富有表现力的普通话为儿童朗读。语速温和，停顿清楚，不要像讲课。" : "Warm, expressive children's audiobook narrator. Keep a gentle pace and make key ideas clear without sounding like a lecture.",
      response_format: "mp3",
    }),
  });
  if (!response.ok) {
    const providerError = await response.json().catch(() => null) as { error?: { code?: string; type?: string } } | null;
    console.error("OpenAI audio generation failed", {
      status: response.status,
      code: providerError?.error?.code,
      type: providerError?.error?.type,
    });
    return NextResponse.json({ error: "Narration is temporarily unavailable", code: "audio_unavailable" }, { status: 503 });
  }
  const audio = await response.arrayBuffer();
  cacheAudio(cacheKey, audio);
  return new NextResponse(audio.slice(0), { headers: { "content-type": "audio/mpeg", "cache-control": "private, max-age=86400", "x-audio-cache": "miss" } });
}
