"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Plus, Check } from "lucide-react";
import { getDictionary, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { Movie } from "@/lib/mock/movies";

export function MovieTrendCard({ movie, lang }: { movie: Movie; lang: Lang }) {
  const dict = getDictionary(lang);
  const [inList, setInList] = useState(false);
  const title = lang === "fa" ? movie.title_fa : movie.title_en;
  const genres = lang === "fa" ? movie.genres_fa : movie.genres_en;

  return (
    <div className="group flex flex-col">
      <div className="relative aspect-[2/3] overflow-hidden rounded-md">
        <Link href={`/${lang}/movies/${movie.id}`}>
          <Image
            src={movie.poster}
            alt={title}
            fill
            sizes="(max-width: 768px) 45vw, 220px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute start-2 top-2 flex items-center gap-1 rounded-xs bg-black/60 px-1.5 py-0.5 font-mono text-[11px] font-bold text-white backdrop-blur">
          <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
          {movie.rating}
        </div>
        <div className="absolute end-2 top-2 rounded-xs bg-ember-500 px-1.5 py-0.5 font-mono text-[11px] font-bold text-white">
          {movie.trendScore}
        </div>
        <button
          type="button"
          onClick={() => setInList((v) => !v)}
          className={cn(
            "absolute bottom-2 end-2 flex items-center gap-1 rounded-xs px-2 py-1 text-[11px] font-semibold backdrop-blur transition-colors",
            inList ? "bg-signal-500 text-white" : "bg-white/90 text-ink hover:bg-white"
          )}
        >
          {inList ? <Check className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
          {inList ? dict.inWatchlist : dict.watchlist}
        </button>
      </div>
      <Link href={`/${lang}/movies/${movie.id}`} className="mt-2.5">
        <h3 className="text-sm font-bold leading-snug text-ink group-hover:text-signal-500 line-clamp-2">
          {title}
        </h3>
      </Link>
      <p className="mt-0.5 text-xs text-muted">
        {movie.year} · {genres.slice(0, 2).join(" / ")}
      </p>
    </div>
  );
}
