import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { leoStory } from "@/lib/stories";

const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  if (body.story !== leoStory.slug || !Number.isInteger(body.section) || body.section < 0 || body.section >= leoStory.sections.length) return NextResponse.json({ error: "Invalid progress" }, { status: 400 });
  const cookieStore = await cookies();
  const savedVisitorId = cookieStore.get("storyline-reader")?.value;
  const visitorId = savedVisitorId && uuidPattern.test(savedVisitorId) ? savedVisitorId : crypto.randomUUID();
  const respond = (stored: "local-only" | "database") => {
    const response = NextResponse.json({ stored });
    response.cookies.set("storyline-reader", visitorId, { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", maxAge: 60 * 60 * 24 * 365, path: "/" });
    return response;
  };
  if (!process.env.NETLIFY_DB_URL) return respond("local-only");

  try {
    const [{ getConnectionString }, { default: postgres }] = await Promise.all([
      import("@netlify/database"),
      import("postgres"),
    ]);
    const sql = postgres(getConnectionString());
    await sql`INSERT INTO reading_progress (visitor_id, story, section) VALUES (${visitorId}, ${body.story}, ${body.section}) ON CONFLICT (visitor_id) DO UPDATE SET story = EXCLUDED.story, section = EXCLUDED.section, updated_at = now()`;
    await sql.end();
    return respond("database");
  } catch {
    return respond("local-only");
  }
}
