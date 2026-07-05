"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { getDictionary, type Lang } from "@/lib/i18n";
import { cn, formatCount, timeAgo } from "@/lib/utils";
import type { Comment } from "@/lib/mock/comments";

export function CommentItem({
  comment,
  lang,
  depth = 0,
}: {
  comment: Comment;
  lang: Lang;
  depth?: number;
}) {
  const dict = getDictionary(lang);
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(comment.likes);
  const [showReplyBox, setShowReplyBox] = useState(false);
  const text = lang === "fa" ? comment.text_fa : comment.text_en;

  return (
    <div className={cn(depth > 0 && "ms-10 mt-3 border-s-2 border-line ps-4")}>
      <div className="flex gap-3">
        <Avatar src={comment.avatar} alt={comment.author} size={36} />
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-2">
            <span className="text-sm font-bold text-ink">{comment.author}</span>
            <span className="font-mono text-[11px] text-muted">
              {timeAgo(comment.created_at, lang)}
            </span>
          </div>
          <p className="mt-1 text-sm leading-relaxed text-ink/90">{text}</p>
          <div className="mt-1.5 flex items-center gap-4">
            <button
              type="button"
              onClick={() => {
                setLiked((v) => !v);
                setLikes((c) => (liked ? c - 1 : c + 1));
              }}
              className={cn(
                "flex items-center gap-1 text-xs font-medium text-muted transition-colors hover:text-ember-500",
                liked && "text-ember-500"
              )}
            >
              <Heart className={cn("h-3.5 w-3.5", liked && "fill-ember-500")} />
              {formatCount(likes, lang)}
            </button>
            <button
              type="button"
              onClick={() => setShowReplyBox((v) => !v)}
              className="text-xs font-medium text-muted transition-colors hover:text-signal-500"
            >
              {dict.reply}
            </button>
          </div>
          {showReplyBox && (
            <div className="mt-2 flex gap-2">
              <input
                type="text"
                placeholder={dict.writeComment}
                className="h-8 flex-1 rounded-sm border border-line bg-paper px-2.5 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500"
              />
            </div>
          )}
        </div>
      </div>
      {comment.replies?.map((reply) => (
        <CommentItem key={reply.id} comment={reply} lang={lang} depth={depth + 1} />
      ))}
    </div>
  );
}
