"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X, Flame, User } from "lucide-react";
import { getDictionary, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Header({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const otherLang: Lang = lang === "fa" ? "en" : "fa";
  const otherPath = pathname?.replace(`/${lang}`, `/${otherLang}`) || `/${otherLang}`;

  const navItems: { slug: string; label: string }[] = [
    { slug: "", label: dict.nav.home },
    { slug: "ai", label: dict.nav.ai },
    { slug: "tech", label: dict.nav.tech },
    { slug: "gaming", label: dict.nav.gaming },
    { slug: "cars", label: dict.nav.cars },
    { slug: "space", label: dict.nav.space },
    { slug: "movies", label: dict.nav.movies },
    { slug: "music", label: dict.nav.music },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/90 backdrop-blur">
      <div className="container">
        <div className="flex h-16 items-center gap-4">
          <Link href={`/${lang}`} className="flex flex-shrink-0 items-center gap-1.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-ink text-white">
              <Flame className="h-4 w-4 text-ember-500" />
            </span>
            <span className="font-display text-lg font-black tracking-tight text-ink">
              {dict.siteName}
            </span>
          </Link>

          <nav className="hidden flex-1 items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const href = `/${lang}${item.slug ? `/${item.slug}` : ""}`;
              const active =
                item.slug === ""
                  ? pathname === `/${lang}`
                  : pathname?.startsWith(`/${lang}/${item.slug}`);
              return (
                <Link
                  key={item.slug || "home"}
                  href={href}
                  className={cn(
                    "rounded-sm px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-black/[0.04] hover:text-ink",
                    active && "bg-black/[0.05] text-ink"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden flex-1 items-center md:flex lg:max-w-[220px]">
            <div className="relative w-full">
              <Search className="pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
              <input
                type="text"
                placeholder={dict.search}
                className="h-9 w-full rounded-sm border border-line bg-paper ps-9 pe-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href={otherPath}
              className="hidden rounded-sm border border-line px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:bg-black/[0.04] sm:inline-flex"
            >
              {dict.switchLang}
            </Link>
            <button className="hidden items-center gap-1.5 rounded-sm bg-ink px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-ink/85 sm:inline-flex">
              <User className="h-3.5 w-3.5" />
              {dict.login}
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-sm border border-line lg:hidden"
              aria-label="menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-surface lg:hidden">
          <div className="container flex flex-col gap-1 py-3">
            {navItems.map((item) => {
              const href = `/${lang}${item.slug ? `/${item.slug}` : ""}`;
              return (
                <Link
                  key={item.slug || "home"}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="rounded-sm px-3 py-2.5 text-sm font-medium text-ink hover:bg-black/[0.04]"
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-2 flex gap-2 px-3">
              <Link
                href={otherPath}
                className="flex-1 rounded-sm border border-line px-3 py-2 text-center text-xs font-semibold"
              >
                {dict.switchLang}
              </Link>
              <button className="flex-1 rounded-sm bg-ink px-3 py-2 text-center text-xs font-semibold text-white">
                {dict.login}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
