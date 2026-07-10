import { notFound } from "next/navigation";
import { AudioPlayer } from "@/components/audio-player";
import { LanguageSwitch } from "@/components/language-switch";
import { StoryReader } from "@/components/story-reader";
import { allStories, getStory } from "@/lib/stories";

export function generateStaticParams() {
  return allStories.map((story) => ({ slug: story.slug }));
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();
  const inChinese = story.locale === "zh-CN";

  return (
    <main className="reader-layout" lang={story.locale}>
      <aside className="chapter-nav">
        <span>{inChinese ? "故事章节" : "In this story"}</span>
        {story.sections.map((section, index) => <a href={`#${section.id}`} key={section.id}><b>{index + 1}</b>{section.title}</a>)}
      </aside>
      <article className={`reader ${inChinese ? "reader-chinese" : ""}`}>
        <header className="story-header">
          <LanguageSwitch locale={story.locale} alternateSlug={story.alternateSlug} />
          <span>{story.age} · {story.duration}</span>
          <h1>{story.title}</h1>
          <p>{story.subtitle}</p>
        </header>
        <StoryReader storySlug={story.slug} locale={story.locale} sections={story.sections} sourceUrl={story.sourceUrl} />
      </article>
      <AudioPlayer storySlug={story.slug} locale={story.locale} sections={story.sections} />
    </main>
  );
}
