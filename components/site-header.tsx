import Link from "next/link";
import { BookOpen } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return <header className="site-header"><Link className="brand" href="/"><BookOpen size={23} /><span>Storyline</span></Link><nav><Link href="/library">Library</Link><Link href="/parents">For grown-ups</Link><ThemeToggle /></nav></header>;
}
