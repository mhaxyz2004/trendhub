import Link from "next/link";
import { TrendingUp } from "lucide-react";
import { getCategory } from "@/lib/mock/categories";
import { formatCount } from "@/lib/utils";
import type { Lang } from "@/lib/i18n";
import type { Trend } from "@/lib/mock/trends";

function hrefFor(trend: Trend, lang: Lang) {
  if (trend.linkType === "movie") return `/${lang}/movies/${trend.linkId}`;
  if (trend.linkType === "song") return `/${lang}/music/${trend.linkId}`;
  if (trend.linkType === "post") return `/${lang}/post/${trend.linkId}`;
  return `/${lang}`;
}

export function TrendingCard({
  trend,
  rank,
  lang,
}: {
  trend: Trend;
  rank: number;
  lang: Lang;
}) {
  const cat = getCategory(trend.category)!;
  const label = lang === "fa" ? trend.label_fa : trend.label_en;
  const catName = lang === "fa" ? cat.name_fa : cat.name_en;

  return (
    <Link
      href={hrefFor(trend, lang)}
      className="flex items-center gap-3 rounded-sm px-2 py-2.5 transition-colors hover:bg-black/[0.03]"
    >
      <span className="font-mono w-5 flex-shrink-0 text-center text-sm font-bold text-muted">
        {String(rank).padStart(2, "0")}
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-ink">{label}</p>
        <p className="mt-0.5 text-xs text-muted">
          {catName} · {formatCount(trend.volume, lang)}
        </p>
      </div>
      <span className="flex flex-shrink-0 items-center gap-0.5 font-mono text-xs font-semibold text-emerald-600">
        <TrendingUp className="h-3 w-3" />
        {trend.change}%
      </span>
    </Link>
  );
}
