import Link from "next/link";
import { ArrowRight, Headphones, Sparkles } from "lucide-react";
import { CloudImage } from "@/components/cloud-image";
import { leoStory } from "@/lib/stories";

export default function HomePage() {
  return <main><section className="home-hero"><CloudImage className="hero-image" src={leoStory.cover} alt="Colorful economics lesson cover" /><div className="hero-shade" /><div className="hero-content"><span className="eyebrow"><Sparkles size={15} /> Today's story</span><h1>{leoStory.title}</h1><p>{leoStory.subtitle}. Meet Leo and discover five economics ideas that can calm even the biggest Choice-Wobbles.</p><div className="hero-actions"><Link className="primary-button" href={`/stories/${leoStory.slug}`}>Start reading <ArrowRight size={18} /></Link><span><Headphones size={17} /> {leoStory.duration}</span></div></div></section><section className="home-band"><div><span className="kicker">Read, listen, choose</span><h2>Stories that invite kids into the idea.</h2></div><p>Short chapters, narrated reading, and little decision moments turn an economics lesson into an adventure worth revisiting.</p></section></main>;
}
