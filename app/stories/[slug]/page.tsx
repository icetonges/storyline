import { notFound } from "next/navigation";
import { AudioPlayer } from "@/components/audio-player";
import { StoryReader } from "@/components/story-reader";
import { leoStory } from "@/lib/stories";

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug !== leoStory.slug) notFound();
  return <main className="reader-layout"><aside className="chapter-nav"><span>In this story</span>{leoStory.sections.map((section, index) => <a href={`#${section.id}`} key={section.id}><b>{index + 1}</b>{section.title}</a>)}</aside><article className="reader"><header className="story-header"><span>{leoStory.age} · {leoStory.duration}</span><h1>{leoStory.title}</h1><p>{leoStory.subtitle}</p></header><StoryReader sections={leoStory.sections} sourceUrl={leoStory.sourceUrl} /></article><AudioPlayer sections={leoStory.sections} /></main>;
}
