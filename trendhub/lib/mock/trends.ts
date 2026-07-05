import type { CategorySlug } from "./categories";

export interface Trend {
  id: string;
  label_fa: string;
  label_en: string;
  category: CategorySlug;
  volume: number; // mentions in last 24h
  change: number; // % change, can be negative
  linkId?: string; // optional post/movie/song id to link to
  linkType?: "post" | "movie" | "song";
}

export const trends: Trend[] = [
  {
    id: "t1",
    label_fa: "مدل اوریون R2",
    label_en: "Orion R2 model",
    category: "ai",
    volume: 128_000,
    change: 42,
    linkId: "ai-orion-r2",
    linkType: "post",
  },
  {
    id: "t2",
    label_fa: "پروتکل نیم‌شب",
    label_en: "Nightfall Protocol",
    category: "movies",
    volume: 214_000,
    change: 65,
    linkId: "nightfall-protocol",
    linkType: "movie",
  },
  {
    id: "t3",
    label_fa: "فرکانس نیمه‌شب",
    label_en: "Midnight Frequency",
    category: "music",
    volume: 98_000,
    change: 51,
    linkId: "midnight-frequency",
    linkType: "song",
  },
  {
    id: "t4",
    label_fa: "دنباله بازی جهان‌باز",
    label_en: "Open-world sequel reveal",
    category: "gaming",
    volume: 176_000,
    change: 38,
    linkId: "gaming-open-world-2027",
    linkType: "post",
  },
  {
    id: "t5",
    label_fa: "رکورد برد خودروی الکتریکی",
    label_en: "EV range record",
    category: "cars",
    volume: 61_000,
    change: 22,
    linkId: "cars-ev-range-record",
    linkType: "post",
  },
  {
    id: "t6",
    label_fa: "بخار آب روی سیاره فراخورشیدی",
    label_en: "Exoplanet water-vapor signal",
    category: "space",
    volume: 142_000,
    change: 58,
    linkId: "space-exoplanet-signal",
    linkType: "post",
  },
  {
    id: "t7",
    label_fa: "گوشی تاشوی نازک",
    label_en: "Thinnest foldable phone",
    category: "tech",
    volume: 87_000,
    change: 19,
    linkId: "tech-foldable-thin",
    linkType: "post",
  },
  {
    id: "t8",
    label_fa: "جایزه ۴۰ میلیون‌ دلاری اسپورت الکترونیک",
    label_en: "$40M esports prize pool",
    category: "gaming",
    volume: 73_000,
    change: 15,
    linkId: "gaming-esports-prize",
    linkType: "post",
  },
  {
    id: "t9",
    label_fa: "عامل‌های خودکار کدنویسی",
    label_en: "Autonomous coding agents",
    category: "ai",
    volume: 54_000,
    change: 12,
    linkId: "ai-copilot-agents",
    linkType: "post",
  },
  {
    id: "t10",
    label_fa: "آخرین مدار",
    label_en: "The Last Orbit",
    category: "movies",
    volume: 66_000,
    change: 27,
    linkId: "the-last-orbit",
    linkType: "movie",
  },
];

export function getTopTrends(limit = 10) {
  return [...trends].sort((a, b) => b.volume - a.volume).slice(0, limit);
}
