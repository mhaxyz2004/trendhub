import type { Metadata } from "next";
import { Inter, Space_Grotesk, Vazirmatn, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { locales, getDirection, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});
const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-fa",
  weight: ["400", "500", "600", "700", "800"],
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "700"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  title: "TrendHub | ترندهاب — Everything trending, right now",
  description:
    "A bilingual hub for the hottest stories in AI, tech, gaming, cars, space, movies and music.",
};

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Lang };
}) {
  const dir = getDirection(params.lang);

  return (
    <html lang={params.lang} dir={dir}>
      <body
        className={cn(
          spaceGrotesk.variable,
          inter.variable,
          vazirmatn.variable,
          jetbrainsMono.variable,
          params.lang === "fa" ? "font-fa" : "font-body",
          "bg-paper text-ink antialiased"
        )}
      >
        <Header lang={params.lang} />
        <main className="min-h-[60vh]">{children}</main>
        <Footer lang={params.lang} />
      </body>
    </html>
  );
}
