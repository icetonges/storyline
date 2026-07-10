"use client";

import { Check, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { CloudImage } from "@/components/cloud-image";
import type { StorySection } from "@/lib/stories";

export function StoryReader({ storySlug, locale, sections, sourceUrl }: { storySlug: string; locale: "en" | "zh-CN"; sections: StorySection[]; sourceUrl: string }) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const inChinese = locale === "zh-CN";

  useEffect(() => {
    let lastSavedSection = -1;
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      const index = sections.findIndex((section) => section.id === visible.target.id);
      if (index >= 0 && index !== lastSavedSection) {
        lastSavedSection = index;
        localStorage.setItem("storyline-progress", JSON.stringify({ story: storySlug, section: index, updatedAt: new Date().toISOString() }));
        fetch("/api/progress", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ story: storySlug, section: index }) }).catch(() => undefined);
      }
    }, { threshold: [0.3, 0.65] });
    sections.forEach((section) => { const node = document.getElementById(section.id); if (node) observer.observe(node); });
    return () => observer.disconnect();
  }, [sections, storySlug]);

  return (
    <div className="story-pages">
      {sections.map((section, index) => (
        <section className="story-page" id={section.id} key={section.id}>
          <div className="page-number">{String(index + 1).padStart(2, "0")}</div>
          <div className="story-copy">
            <span className="kicker">{section.kicker}</span>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.comparison && <div className="mindset-table" role="table" aria-label={inChinese ? "心态对比" : "Mindset comparison"}><div className="mindset-head" role="row"><strong role="columnheader">{section.comparison.leftTitle}</strong><strong role="columnheader">{section.comparison.rightTitle}</strong></div>{section.comparison.rows.map(([left, right]) => <div className="mindset-row" role="row" key={left}><span role="cell">{left}</span><span role="cell">{right}</span></div>)}</div>}
            {section.choice && (
              <div className="choice-block">
                <span>{inChinese ? "想一想" : "Think it through"}</span>
                <h3>{section.choice.question}</h3>
                <div className="choice-options">
                  {section.choice.options.map((option) => {
                    const chosen = answers[section.id] === option;
                    const correct = chosen && option === section.choice?.answer;
                    return <button aria-pressed={chosen} className={chosen ? (correct ? "correct" : "selected") : ""} onClick={() => setAnswers((current) => ({ ...current, [section.id]: option }))} key={option}>{correct && <Check size={16} />} {option}</button>;
                  })}
                </div>
                <div role="status" aria-live="polite">{answers[section.id] && answers[section.id] !== section.choice.answer && <p className="try-again">{inChinese ? "想得不错。再看看这一章，然后试一次。" : "Good thinking. Look back at the chapter and try once more."}</p>}{answers[section.id] === section.choice.answer && <p className="right-answer">{inChinese ? "答对了，推理得很好！" : "That's it. Nice reasoning!"}</p>}</div>
              </div>
            )}
          </div>
          {section.image && <figure><CloudImage src={section.image.src} alt={section.image.alt} /><figcaption>{section.image.credit}</figcaption></figure>}
        </section>
      ))}
      <footer className="source-note">{inChinese ? "本互动故事改编自" : "Adapted into an interactive learning book from the"} <a href={sourceUrl} target="_blank" rel="noreferrer">{inChinese ? "原始 Gemini 对话" : "original Gemini response"} <ExternalLink size={14} /></a>.</footer>
    </div>
  );
}
