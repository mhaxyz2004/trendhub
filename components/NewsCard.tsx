import Image from "next/image";
import Link from "next/link";
import { CategoryBadge, TrendingBadge } from "@/components/Badge";
import { InteractionBar } from "@/components/InteractionBar";
import { getCategory } from "@/lib/mock/categories";
import { getDictionary, type Lang } from "@/lib/i18n";
import { timeAgo } from "@/lib/utils";
import type { Post } from "@/lib/mock/posts";

export function NewsCard({
  post,
  lang,
  layout = "vertical",
}: {
  post: Post;
  lang: Lang;
  layout?: "vertical" | "horizontal";
}) {
  const dict = getDictionary(lang);
  const cat = getCategory(post.category)!;
  const title = lang === "fa" ? post.title_fa : post.title_en;
  const summary = lang === "fa" ? post.summary_fa : post.summary_en;
  const catName = lang === "fa" ? cat.name_fa : cat.name_en;

  if (layout === "horizontal") {
    return (
      <article className="group flex gap-4 border-b border-line py-4 last:border-0">
        <Link
          href={`/${lang}/post/${post.id}`}
          className="relative h-24 w-32 flex-shrink-0 overflow-hidden rounded-sm sm:h-28 sm:w-40"
        >
          <Image
            src={post.image}
            alt={title}
            fill
            sizes="160px"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        <div className="flex min-w-0 flex-1 flex-col gap-1.5">
          <div className="flex flex-wrap items-center gap-2">
            <CategoryBadge category={post.category} label={catName} />
            {post.trending && <TrendingBadge label={dict.trendingBadge} />}
          </div>
          <Link href={`/${lang}/post/${post.id}`}>
            <h3 className="text-[15px] font-bold leading-snug text-ink group-hover:text-signal-500 sm:text-base">
              {title}
            </h3>
          </Link>
          <p className="hidden text-sm leading-relaxed text-muted line-clamp-2 sm:block">
            {summary}
          </p>
          <div className="mt-auto flex items-center justify-between pt-1">
            <span className="font-mono text-[11px] text-muted">
              {post.source} · {timeAgo(post.created_at, lang)}
            </span>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex flex-col overflow-hidden rounded-md border border-line bg-surface transition-shadow hover:shadow-[0_4px_24px_-8px_rgba(20,22,26,0.15)]">
      <Link href={`/${lang}/post/${post.id}`} className="relative block aspect-[16/10] overflow-hidden">
        <Image
          src={post.image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute start-2.5 top-2.5 flex gap-1.5">
          <CategoryBadge category={post.category} label={catName} className="bg-surface/95 backdrop-blur" />
        </div>
        {post.trending && (
          <div className="absolute end-2.5 top-2.5">
            <TrendingBadge label={dict.trendingBadge} className="bg-surface/95 backdrop-blur" />
          </div>
        )}
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <Link href={`/${lang}/post/${post.id}`}>
          <h3 className="text-[15px] font-bold leading-snug text-ink group-hover:text-signal-500">
            {title}
          </h3>
        </Link>
        <p className="text-sm leading-relaxed text-muted line-clamp-2">{summary}</p>
        <div className="mt-1 flex items-center justify-between">
          <span className="font-mono text-[11px] text-muted">
            {post.source} · {timeAgo(post.created_at, lang)}
          </span>
        </div>
        <InteractionBar
          likes={post.likes}
          commentsCount={post.commentsCount}
          lang={lang}
          dict={dict}
          size="sm"
        />
      </div>
    </article>
  );
}
