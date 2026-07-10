import Link from "next/link";
import { Languages } from "lucide-react";

export function LanguageSwitch({ locale, alternateSlug }: { locale: "en" | "zh-CN"; alternateSlug?: string }) {
  if (!alternateSlug) return null;
  return (
    <div className="language-switch" aria-label="Story language">
      <Languages size={17} />
      {locale === "en" ? <span className="current-language" aria-current="page">English</span> : <Link href={`/stories/${alternateSlug}`}>English</Link>}
      {locale === "zh-CN" ? <span className="current-language" aria-current="page">中文</span> : <Link href={`/stories/${alternateSlug}`}>中文</Link>}
    </div>
  );
}
