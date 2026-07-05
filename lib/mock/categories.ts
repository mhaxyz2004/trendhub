export type CategorySlug =
  | "ai"
  | "tech"
  | "gaming"
  | "cars"
  | "space"
  | "movies"
  | "music";

export interface Category {
  slug: CategorySlug;
  name_fa: string;
  name_en: string;
  desc_fa: string;
  desc_en: string;
  color: string; // tailwind color token e.g. cat-ai
  cover: string;
}

export const categories: Category[] = [
  {
    slug: "ai",
    name_fa: "هوش مصنوعی",
    name_en: "Artificial Intelligence",
    desc_fa: "آخرین مدل‌ها، ابزارها و بحث‌های داغ دنیای هوش مصنوعی",
    desc_en: "The latest models, tools and debates shaping AI",
    color: "cat-ai",
    cover: "https://picsum.photos/seed/ai-cover/1600/500",
  },
  {
    slug: "tech",
    name_fa: "تکنولوژی",
    name_en: "Technology",
    desc_fa: "گجت‌ها، استارتاپ‌ها و رویدادهای مهم صنعت فناوری",
    desc_en: "Gadgets, startups and the moves shaping the tech industry",
    color: "cat-tech",
    cover: "https://picsum.photos/seed/tech-cover/1600/500",
  },
  {
    slug: "gaming",
    name_fa: "گیمینگ",
    name_en: "Gaming",
    desc_fa: "اخبار بازی‌ها، استودیوها و اسپورت‌های الکترونیک",
    desc_en: "Game releases, studios and esports headlines",
    color: "cat-gaming",
    cover: "https://picsum.photos/seed/gaming-cover/1600/500",
  },
  {
    slug: "cars",
    name_fa: "خودرو",
    name_en: "Cars",
    desc_fa: "خودروهای برقی، رونمایی‌ها و آینده صنعت خودرو",
    desc_en: "EVs, reveals and the future of the auto industry",
    color: "cat-cars",
    cover: "https://picsum.photos/seed/cars-cover/1600/500",
  },
  {
    slug: "space",
    name_fa: "فضا و کهکشان",
    name_en: "Space & Astronomy",
    desc_fa: "ماموریت‌های فضایی، کشفیات نجومی و شرکت‌های فضایی",
    desc_en: "Space missions, cosmic discoveries and spaceflight companies",
    color: "cat-space",
    cover: "https://picsum.photos/seed/space-cover/1600/500",
  },
  {
    slug: "movies",
    name_fa: "فیلم و سریال",
    name_en: "Movies & Series",
    desc_fa: "پرطرفدارترین فیلم‌ها و سریال‌های این هفته",
    desc_en: "The most-watched movies and series this week",
    color: "cat-movies",
    cover: "https://picsum.photos/seed/movies-cover/1600/500",
  },
  {
    slug: "music",
    name_fa: "موسیقی",
    name_en: "Music",
    desc_fa: "آهنگ‌ها، آلبوم‌ها و هنرمندان داغ این روزها",
    desc_en: "Songs, albums and artists everyone is talking about",
    color: "cat-music",
    cover: "https://picsum.photos/seed/music-cover/1600/500",
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
