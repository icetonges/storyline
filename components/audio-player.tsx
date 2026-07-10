"use client";

import { Gauge, Pause, Play, RotateCcw, Volume2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { StorySection } from "@/lib/stories";
import { audiobookVoices, type AudiobookVoice } from "@/lib/audio";

export function AudioPlayer({ sections }: { sections: StorySection[] }) {
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
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
        body: JSON.stringify({ sectionId: sections[chapter].id, voice }),
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
        await audio.play();
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

  useEffect(() => {
    const saved = localStorage.getItem("storyline-audio-voice");
    if (audiobookVoices.some((option) => option.id === saved)) setVoice(saved as AudiobookVoice);
  }, []);

  return (
    <aside className="audio-dock" aria-label="Audiobook controls">
      <div className="audio-topline"><span>Now reading</span><Volume2 size={16} /></div>
      <strong>{sections[chapter].title}</strong>
      <div className="audio-controls">
        <button className="icon-button" onClick={restart} aria-label="Restart chapter" title="Restart"><RotateCcw size={18} /></button>
        <button className="play-button" disabled={loading} onClick={playing ? pause : play} aria-label={loading ? "Preparing audiobook" : playing ? "Pause audiobook" : "Play audiobook"}>
          {playing ? <Pause fill="currentColor" /> : <Play fill="currentColor" />}
        </button>
        <button className="speed-button" aria-label={`Narration speed ${speed}x`} onClick={() => setSpeed((value) => value === 1 ? 1.25 : value === 1.25 ? 1.5 : 1)} title="Narration speed">
          <Gauge size={17} /> {speed}x
        </button>
      </div>
      <label className="chapter-label" htmlFor="audio-chapter">Chapter</label>
      <select id="audio-chapter" value={chapter} onChange={(event) => changeChapter(Number(event.target.value))}>
        {sections.map((section, index) => <option key={section.id} value={index}>{index + 1}. {section.title}</option>)}
      </select>
      <label className="voice-label" htmlFor="audio-voice">Narrator voice</label>
      <select id="audio-voice" value={voice} onChange={(event) => changeVoice(event.target.value as AudiobookVoice)}>
        {audiobookVoices.map((option) => <option key={option.id} value={option.id}>{option.label} - {option.description}{"recommended" in option && option.recommended ? " (recommended)" : ""}</option>)}
      </select>
      <span className="audio-model">AI-generated OpenAI narration. Device voice is used as a fallback.</span>
    </aside>
  );
}
