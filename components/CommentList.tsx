"use client";

import { useState } from "react";
import { CommentItem } from "@/components/CommentItem";
import { Textarea } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getDictionary, type Lang } from "@/lib/i18n";
import type { Comment } from "@/lib/mock/comments";

export function CommentList({
  comments,
  lang,
  totalCount,
}: {
  comments: Comment[];
  lang: Lang;
  totalCount: number;
}) {
  const dict = getDictionary(lang);
  const [draft, setDraft] = useState("");
  const [posted, setPosted] = useState<string[]>([]);

  return (
    <section>
      <h2 className="mb-4 text-lg font-bold text-ink">
        {dict.comments} <span className="text-muted">({totalCount})</span>
      </h2>

      <div className="mb-6 flex flex-col gap-2">
        <Textarea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder={dict.writeComment}
          rows={3}
        />
        <Button
          variant="primary"
          size="sm"
          className="self-end"
          disabled={!draft.trim()}
          onClick={() => {
            setPosted((p) => [draft.trim(), ...p]);
            setDraft("");
          }}
        >
          {dict.submitComment}
        </Button>
      </div>

      {posted.length > 0 && (
        <div className="mb-4 flex flex-col gap-4 border-b border-line pb-4">
          {posted.map((text, i) => (
            <div key={i} className="flex gap-3">
              <div className="h-9 w-9 flex-shrink-0 rounded-full bg-signal-100 text-center font-bold text-signal-600 leading-9">
                {lang === "fa" ? "م" : "Y"}
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-sm font-bold text-ink">
                  {lang === "fa" ? "شما" : "You"}
                </span>
                <p className="mt-1 text-sm leading-relaxed text-ink/90">{text}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {comments.length === 0 ? (
        <p className="text-sm text-muted">{dict.noComments}</p>
      ) : (
        <div className="flex flex-col gap-5">
          {comments.map((c) => (
            <CommentItem key={c.id} comment={c} lang={lang} />
          ))}
        </div>
      )}
    </section>
  );
}
