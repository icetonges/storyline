import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { CloudImage } from "@/components/cloud-image";
import { stories } from "@/lib/stories";

export default function LibraryPage() {
  return (
    <main className="library-page">
      <div className="page-heading">
        <span className="kicker">The library</span>
        <h1>Choose your next big idea.</h1>
        <p>Each story mixes a memorable adventure with one useful way to understand the world.</p>
      </div>
      <div className="book-grid">
        {stories.map((story) => (
          <article className="book-card" key={story.slug}>
            <CloudImage src={story.cover} alt={story.title} />
            <div>
              <span>{story.age}{story.alternateSlug ? " · English + 中文" : ""}</span>
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
    </main>
  );
}
