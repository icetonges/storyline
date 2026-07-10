import Link from "next/link";
import { ArrowRight, Clock, Headphones, Sparkles } from "lucide-react";
import { CloudImage } from "@/components/cloud-image";
import { brainBackpackEnglish, leoStory, stories } from "@/lib/stories";

export default function HomePage() {
  const financeStories = stories.slice(2);

  return (
    <main>
      <section className="home-hero">
        <CloudImage className="hero-image" src={leoStory.cover} alt="Colorful economics lesson cover" />
        <div className="hero-shade" />
        <div className="hero-content">
          <span className="eyebrow"><Sparkles size={15} /> Story one</span>
          <h1>{leoStory.title}</h1>
          <p>{leoStory.subtitle}. Meet Leo and discover five economics ideas that can calm even the biggest Choice-Wobbles.</p>
          <div className="hero-actions">
            <Link className="primary-button" href={`/stories/${leoStory.slug}`}>Start reading <ArrowRight size={18} /></Link>
            <span><Headphones size={17} /> {leoStory.duration}</span>
          </div>
        </div>
      </section>

      <section className="featured-story">
        <CloudImage src={brainBackpackEnglish.cover} alt="Brain Backpacks story cover" />
        <div>
          <span className="kicker">New · English + 中文</span>
          <h2>{brainBackpackEnglish.title}</h2>
          <p>{brainBackpackEnglish.subtitle}. Follow Leo and Mia as they learn to make room for possibility, one thought at a time.</p>
          <div className="featured-actions">
            <Link className="primary-button" href={`/stories/${brainBackpackEnglish.slug}`}>Read in English <ArrowRight size={18} /></Link>
            <Link href="/stories/brain-backpacks-zh">阅读中文版</Link>
          </div>
        </div>
      </section>

      <section className="home-shelf">
        <div className="section-heading">
          <span className="kicker">New finance adventures</span>
          <h2>Think deeper about money, crowds, and freedom.</h2>
        </div>
        <div className="book-grid">
          {financeStories.map((story) => (
            <article className="book-card" key={story.slug}>
              <CloudImage src={story.cover} alt={story.title} />
              <div>
                <span>{story.age} · English + 中文</span>
                <h2>{story.title}</h2>
                <p>{story.subtitle}</p>
                <div className="card-footer">
                  <span><Clock size={15} /> {story.duration}</span>
                  <Link href={`/stories/${story.slug}`} aria-label={`Read ${story.title}`}><ArrowRight /></Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-band">
        <div>
          <span className="kicker">Read, listen, choose</span>
          <h2>Stories that invite kids into the idea.</h2>
        </div>
        <p>Short chapters, narrated reading, and little decision moments turn big ideas into adventures worth revisiting.</p>
      </section>
    </main>
  );
}
