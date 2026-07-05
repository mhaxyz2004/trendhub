"use client";

import { useState } from "react";
import { Heart, MessageCircle, Bookmark, Share2 } from "lucide-react";
import { cn, formatCount } from "@/lib/utils";
import type { Lang } from "@/lib/i18n";

export function InteractionBar({
  likes,
  commentsCount,
  lang,
  dict,
  size = "default",
}: {
  likes: number;
  commentsCount: number;
  lang: Lang;
  dict: { like: string; bookmark: string; bookmarked: string; share: string };
  size?: "default" | "sm";
}) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [saved, setSaved] = useState(false);
  const [shared, setShared] = useState(false);

  const iconSize = size === "sm" ? "h-4 w-4" : "h-[18px] w-[18px]";
  const textSize = size === "sm" ? "text-xs" : "text-sm";

  return (
    <div
      className={cn(
        "flex items-center gap-4 text-muted",
        textSize
      )}
      dir="ltr"
      style={{ direction: lang === "fa" ? "rtl" : "ltr" }}
    >
      <button
        type="button"
        onClick={() => {
          setLiked((v) => !v);
          setLikeCount((c) => (liked ? c - 1 : c + 1));
        }}
        className={cn(
          "flex items-center gap-1.5 transition-colors hover:text-ember-500",
          liked && "text-ember-500"
        )}
        aria-pressed={liked}
        title={dict.like}
      >
        <Heart className={cn(iconSize, liked && "fill-ember-500")} />
        <span className="tabular-nums font-medium">{formatCount(likeCount, lang)}</span>
      </button>

      <span className="flex items-center gap-1.5">
        <MessageCircle className={iconSize} />
        <span className="tabular-nums font-medium">{formatCount(commentsCount, lang)}</span>
      </span>

      <button
        type="button"
        onClick={() => setSaved((v) => !v)}
        className={cn(
          "flex items-center gap-1.5 transition-colors hover:text-signal-500 ms-auto",
          saved && "text-signal-500"
        )}
        aria-pressed={saved}
        title={saved ? dict.bookmarked : dict.bookmark}
      >
        <Bookmark className={cn(iconSize, saved && "fill-signal-500")} />
      </button>

      <button
        type="button"
        onClick={() => {
          setShared(true);
          setTimeout(() => setShared(false), 1500);
        }}
        className="flex items-center gap-1.5 transition-colors hover:text-ink"
        title={dict.share}
      >
        <Share2 className={iconSize} />
        {shared && <span className="text-[11px]">✓</span>}
      </button>
    </div>
  );
}
