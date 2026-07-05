"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Pause } from "lucide-react";
import { getDictionary, type Lang } from "@/lib/i18n";
import { formatCount, cn } from "@/lib/utils";
import type { Song } from "@/lib/mock/music";

export function MusicCard({
  song,
  lang,
  rank,
}: {
  song: Song;
  lang: Lang;
  rank?: number;
}) {
  const dict = getDictionary(lang);
  const [playing, setPlaying] = useState(false);
  const title = lang === "fa" ? song.title_fa : song.title_en;
  const artist = lang === "fa" ? song.artist_fa : song.artist_en;

  return (
    <div className="group flex items-center gap-3 rounded-md border border-line bg-surface p-2.5 transition-colors hover:border-signal-500/30">
      {rank !== undefined && (
        <span className="font-mono w-5 flex-shrink-0 text-center text-sm font-bold text-muted">
          {rank}
        </span>
      )}
      <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-sm">
        <Link href={`/${lang}/music/${song.id}`}>
          <Image src={song.cover} alt={title} fill sizes="56px" className="object-cover" />
        </Link>
        <button
          type="button"
          onClick={() => setPlaying((v) => !v)}
          title={dict.playPreview}
          className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100"
        >
          {playing ? (
            <Pause className="h-5 w-5 fill-white text-white" />
          ) : (
            <Play className="h-5 w-5 fill-white text-white" />
          )}
        </button>
      </div>
      <div className="min-w-0 flex-1">
        <Link href={`/${lang}/music/${song.id}`}>
          <h4 className="truncate text-sm font-bold text-ink group-hover:text-signal-500">
            {title}
          </h4>
        </Link>
        <p className="truncate text-xs text-muted">{artist}</p>
      </div>
      <div className={cn("flex-shrink-0 text-end font-mono text-xs text-muted")}>
        <div className="font-semibold text-ember-500">{song.trendScore}</div>
        <div>{formatCount(song.streams, lang)}</div>
      </div>
    </div>
  );
}
