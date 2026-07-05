import Link from "next/link";
import { Flame, Twitter, Github, Instagram } from "lucide-react";
import { getDictionary, type Lang } from "@/lib/i18n";
import { categories } from "@/lib/mock/categories";

export function Footer({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);

  return (
    <footer className="mt-16 border-t border-line bg-surface">
      <div className="container grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href={`/${lang}`} className="flex items-center gap-1.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-ink text-white">
              <Flame className="h-4 w-4 text-ember-500" />
            </span>
            <span className="font-display text-lg font-black tracking-tight text-ink">
              {dict.siteName}
            </span>
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            {dict.footerAbout}
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-bold text-ink">{dict.footerCategoriesTitle}</h4>
          <ul className="flex flex-col gap-2">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/${lang}/${c.slug}`}
                  className="text-sm text-muted transition-colors hover:text-signal-500"
                >
                  {lang === "fa" ? c.name_fa : c.name_en}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-bold text-ink">{dict.footerLinksTitle}</h4>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href={`/${lang}`} className="text-sm text-muted hover:text-signal-500">
                {dict.nav.home}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/movies`} className="text-sm text-muted hover:text-signal-500">
                {dict.nav.movies}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/music`} className="text-sm text-muted hover:text-signal-500">
                {dict.nav.music}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-bold text-ink">{dict.footerFollowTitle}</h4>
          <div className="flex gap-2">
            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-sm border border-line text-muted transition-colors hover:border-signal-500 hover:text-signal-500"
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-sm border border-line text-muted transition-colors hover:border-signal-500 hover:text-signal-500"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-sm border border-line text-muted transition-colors hover:border-signal-500 hover:text-signal-500"
              aria-label="Github"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-line py-5">
        <div className="container flex flex-col items-center justify-between gap-2 text-xs text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {dict.siteName}. {dict.footerRights}
          </p>
          <p className="font-mono">Built with Next.js · TypeScript · Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
