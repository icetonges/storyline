"use client";

import { Check, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { CloudImage } from "@/components/cloud-image";
import type { StorySection } from "@/lib/stories";

export function StoryReader({ sections, sourceUrl }: { sections: StorySection[]; sourceUrl: string }) {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  useEffect(() => {
    let lastSavedSection = -1;
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      const index = sections.findIndex((section) => section.id === visible.target.id);
      if (index >= 0 && index !== lastSavedSection) {
        lastSavedSection = index;
        localStorage.setItem("storyline-progress", JSON.stringify({ story: "leo-five-secrets", section: index, updatedAt: new Date().toISOString() }));
        fetch("/api/progress", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ story: "leo-five-secrets", section: index }) }).catch(() => undefined);
      }
    }, { threshold: [0.3, 0.65] });
    sections.forEach((section) => { const node = document.getElementById(section.id); if (node) observer.observe(node); });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="story-pages">
      {sections.map((section, index) => (
        <section className="story-page" id={section.id} key={section.id}>
          <div className="page-number">{String(index + 1).padStart(2, "0")}</div>
          <div className="story-copy">
            <span className="kicker">{section.kicker}</span>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.choice && (
              <div className="choice-block">
                <span>Think it through</span>
                <h3>{section.choice.question}</h3>
                <div className="choice-options">
                  {section.choice.options.map((option) => {
                    const chosen = answers[section.id] === option;
                    const correct = chosen && option === section.choice?.answer;
                    return <button aria-pressed={chosen} className={chosen ? (correct ? "correct" : "selected") : ""} onClick={() => setAnswers((current) => ({ ...current, [section.id]: option }))} key={option}>{correct && <Check size={16} />} {option}</button>;
                  })}
                </div>
                <div role="status" aria-live="polite">{answers[section.id] && answers[section.id] !== section.choice.answer && <p className="try-again">Good thinking. Look back at the chapter and try once more.</p>}{answers[section.id] === section.choice.answer && <p className="right-answer">That's it. Nice reasoning!</p>}</div>
              </div>
            )}
          </div>
          {section.image && <figure><CloudImage src={section.image.src} alt={section.image.alt} /><figcaption>{section.image.credit}</figcaption></figure>}
        </section>
      ))}
      <footer className="source-note">Adapted into an interactive learning book from the <a href={sourceUrl} target="_blank" rel="noreferrer">original Gemini response <ExternalLink size={14} /></a>.</footer>
    </div>
  );
}
