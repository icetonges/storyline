import type { Metadata } from "next";
import { Nunito, Source_Serif_4 } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const sans = Nunito({ subsets: ["latin"], variable: "--font-sans" });
const serif = Source_Serif_4({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = { title: "Storyline | Big ideas for curious kids", description: "Interactive stories that make big ideas easier to understand." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-theme="dark" suppressHydrationWarning><body className={`${sans.variable} ${serif.variable}`}><SiteHeader />{children}</body></html>;
}
