import { dictionaries, type Lang } from "./dictionaries";

export const locales: Lang[] = ["fa", "en"];
export const defaultLocale: Lang = "fa";

export function getDictionary(lang: Lang) {
  return dictionaries[lang] ?? dictionaries[defaultLocale];
}

export function getDirection(lang: Lang): "rtl" | "ltr" {
  return lang === "fa" ? "rtl" : "ltr";
}

/** Pick the localized field from a bilingual object, e.g. pick(post, "title", "fa") -> post.title_fa */
export function pick<T extends Record<string, any>>(
  obj: T,
  field: string,
  lang: Lang
): string {
  const key = `${field}_${lang}` as keyof T;
  return (obj[key] as unknown as string) ?? "";
}

export type { Lang };
