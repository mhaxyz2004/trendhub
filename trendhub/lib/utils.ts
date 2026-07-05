import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format a relative time string in fa/en from an ISO date */
export function timeAgo(iso: string, lang: "fa" | "en") {
  const now = new Date("2026-07-05T12:00:00Z").getTime();
  const then = new Date(iso).getTime();
  const diffMs = Math.max(now - then, 0);
  const minutes = Math.floor(diffMs / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (lang === "fa") {
    if (minutes < 60) return `${minutes} دقیقه پیش`;
    if (hours < 24) return `${hours} ساعت پیش`;
    if (days < 7) return `${days} روز پیش`;
    return new Date(iso).toLocaleDateString("fa-IR");
  }
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

/** Format large numbers (1200 -> 1.2K) */
export function formatCount(n: number, lang: "fa" | "en") {
  const format = (v: number, suffix: string) => {
    const num = v.toFixed(v < 10 ? 1 : 0);
    return lang === "fa" ? `${num}${suffix}` : `${num}${suffix}`;
  };
  if (n >= 1_000_000) return format(n / 1_000_000, lang === "fa" ? " م" : "M");
  if (n >= 1_000) return format(n / 1_000, lang === "fa" ? " هزار" : "K");
  return lang === "fa" ? toFaDigits(String(n)) : String(n);
}

const faDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
export function toFaDigits(input: string) {
  return input.replace(/[0-9]/g, (d) => faDigits[Number(d)]);
}
