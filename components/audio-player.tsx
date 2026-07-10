"use client";

import { Download, Gauge, Pause, Play, RotateCcw, Volume2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { StorySection } from "@/lib/stories";
import { audiobookVoices, type AudiobookVoice } from "@/lib/audio";

export function AudioPlayer({ storySlug, locale, sections }: { storySlug: string; locale: "en" | "zh-CN"; sections: StorySection[] }) {
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState<"idle" | "saved" | "error">("idle");
  const [chapter, setChapter] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [voice, setVoice] = useState<AudiobookVoice>("marin");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const objectUrlRef = useRef<string | null>(null);

  const text = `${sections[chapter].title}. ${sections[chapter].paragraphs.join(" ")}`;

  useEffect(() => () => {
    speechSynthesis.cancel();
    if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
  }, []);

  async function play() {
    if (loading) return;
    if (audioRef.current?.src) {
      audioRef.current.playbackRate = speed;
      await audioRef.current.play();
      setPlaying(true);
      return;
    }

    if (speechSynthesis.paused) {
      speechSynthesis.resume();
      setPlaying(true);
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("/api/audio", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ storySlug, sectionId: sections[chapter].id, voice }),
      });
      if (response.ok) {
        const blob = await response.blob();
        objectUrlRef.current = URL.createObjectURL(blob);
        const audio = new Audio(objectUrlRef.current);
        audio.playbackRate = speed;
        audio.onended = () => {
          if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
          objectUrlRef.current = null;
          nextChapter();
        };
        audioRef.current = audio;
        try {
          await audio.play();
        } catch {
          if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
          objectUrlRef.current = null;
          audioRef.current = null;
          throw new Error("Audio playback failed");
        }
        setPlaying(true);
        return;
      }
    } catch {
      // Browser narration below keeps the reader functional without an API key.
    } finally {
      setLoading(false);
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = speed;
    utterance.pitch = 1.04;
    utterance.lang = locale;
    utterance.onend = nextChapter;
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
    setPlaying(true);
  }

  function pause() {
    audioRef.current?.pause();
    speechSynthesis.pause();
    setPlaying(false);
  }

  function restart() {
    audioRef.current?.pause();
    audioRef.current = null;
    speechSynthesis.cancel();
    if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
    objectUrlRef.current = null;
    setPlaying(false);
  }

  function nextChapter() {
    setPlaying(false);
    setChapter((current) => Math.min(current + 1, sections.length - 1));
    audioRef.current = null;
  }

  function changeChapter(index: number) {
    restart();
    setChapter(index);
    document.getElementById(sections[index].id)?.scrollIntoView({ behavior: "smooth" });
  }

  function changeVoice(nextVoice: AudiobookVoice) {
    restart();
    setVoice(nextVoice);
    localStorage.setItem("storyline-audio-voice", nextVoice);
  }

  async function downloadChapter() {
    if (downloading) return;
    setDownloading(true);
    setDownloadStatus("idle");

    try {
      const response = await fetch("/api/audio", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ storySlug, sectionId: sections[chapter].id, voice }),
      });
      if (!response.ok) throw new Error("Audio download failed");

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${storySlug}-${String(chapter + 1).padStart(2, "0")}-${sections[chapter].id}-${voice}.mp3`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      setDownloadStatus("saved");
    } catch {
      setDownloadStatus("error");
    } finally {
      setDownloading(false);
    }
  }

  useEffect(() => {
    const saved = localStorage.getItem("storyline-audio-voice");
    if (audiobookVoices.some((option) => option.id === saved)) setVoice(saved as AudiobookVoice);
  }, []);

  return (
    <aside className="audio-dock" aria-label={locale === "zh-CN" ? "有声书控制" : "Audiobook controls"}>
      <div className="audio-topline"><span>{locale === "zh-CN" ? "正在朗读" : "Now reading"}</span><Volume2 size={16} /></div>
      <strong>{sections[chapter].title}</strong>
      <div className="audio-controls">
        <button className="icon-button" onClick={restart} aria-label={locale === "zh-CN" ? "重新播放本章" : "Restart chapter"} title={locale === "zh-CN" ? "重新播放" : "Restart"}><RotateCcw size={18} /></button>
        <button className="play-button" disabled={loading} onClick={playing ? pause : play} aria-label={loading ? (locale === "zh-CN" ? "正在准备有声书" : "Preparing audiobook") : playing ? (locale === "zh-CN" ? "暂停有声书" : "Pause audiobook") : (locale === "zh-CN" ? "播放有声书" : "Play audiobook")}>
          {playing ? <Pause fill="currentColor" /> : <Play fill="currentColor" />}
        </button>
        <button className="icon-button download-button" disabled={downloading} onClick={downloadChapter} aria-label={downloading ? (locale === "zh-CN" ? "正在准备下载" : "Preparing download") : (locale === "zh-CN" ? "下载当前章节音频" : "Download current chapter audio")} title={locale === "zh-CN" ? "下载章节" : "Download chapter"}><Download size={18} /></button>
        <button className="speed-button" aria-label={locale === "zh-CN" ? `朗读速度 ${speed} 倍` : `Narration speed ${speed}x`} onClick={() => setSpeed((value) => value === 1 ? 1.25 : value === 1.25 ? 1.5 : 1)} title={locale === "zh-CN" ? "朗读速度" : "Narration speed"}>
          <Gauge size={17} /> {speed}x
        </button>
      </div>
      <label className="chapter-label" htmlFor="audio-chapter">{locale === "zh-CN" ? "章节" : "Chapter"}</label>
      <select id="audio-chapter" value={chapter} onChange={(event) => changeChapter(Number(event.target.value))}>
        {sections.map((section, index) => <option key={section.id} value={index}>{index + 1}. {section.title}</option>)}
      </select>
      <label className="voice-label" htmlFor="audio-voice">{locale === "zh-CN" ? "朗读声音" : "Narrator voice"}</label>
      <select id="audio-voice" value={voice} onChange={(event) => changeVoice(event.target.value as AudiobookVoice)}>
        {audiobookVoices.map((option) => <option key={option.id} value={option.id}>{option.label} - {option.description}{"recommended" in option && option.recommended ? " (recommended)" : ""}</option>)}
      </select>
      <span className={`download-status ${downloadStatus}`} role="status" aria-live="polite">{downloadStatus === "saved" ? (locale === "zh-CN" ? "章节音频已下载。" : "Chapter audio downloaded.") : downloadStatus === "error" ? (locale === "zh-CN" ? "暂时无法下载，请重试。" : "Download unavailable. Please try again.") : ""}</span>
      <span className="audio-model">{locale === "zh-CN" ? "OpenAI 生成的 AI 朗读。无法连接时使用设备声音。" : "AI-generated OpenAI narration. Device voice is used as a fallback."}</span>
    </aside>
  );
}
