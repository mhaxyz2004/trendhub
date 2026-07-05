import Image from "next/image";
import { notFound } from "next/navigation";
import { CategoryBadge, TrendingBadge } from "@/components/Badge";
import { InteractionBar } from "@/components/InteractionBar";
import { CommentList } from "@/components/CommentList";
import { NewsCard } from "@/components/NewsCard";
import { getDictionary, type Lang } from "@/lib/i18n";
import { posts, getPost, getRelatedPosts } from "@/lib/mock/posts";
import { getCategory } from "@/lib/mock/categories";
import { baseComments } from "@/lib/mock/comments";
import { timeAgo } from "@/lib/utils";

export function generateStaticParams() {
  return posts.map((p) => ({ id: p.id }));
}

export default function PostDetailPage({
  params,
}: {
  params: { lang: Lang; id: string };
}) {
  const { lang, id } = params;
  const dict = getDictionary(lang);
  const post = getPost(id);
  if (!post) notFound();

  const category = getCategory(post.category)!;
  const title = lang === "fa" ? post.title_fa : post.title_en;
  const body = lang === "fa" ? post.body_fa : post.body_en;
  const tags = lang === "fa" ? post.tags_fa : post.tags_en;
  const related = getRelatedPosts(post, 3);

  return (
    <div>
      <div className="relative h-[38vh] min-h-[280px] w-full">
        <Image src={post.image} alt={title} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-paper via-ink/40 to-ink/10" />
      </div>

      <div className="container -mt-20 pb-16">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-md border border-line bg-surface p-5 shadow-sm sm:p-8">
            <div className="flex flex-wrap items-center gap-2">
              <CategoryBadge
                category={post.category}
                label={lang === "fa" ? category.name_fa : category.name_en}
              />
              {post.trending && <TrendingBadge label={dict.trendingBadge} />}
              <span className="ms-auto font-mono text-xs text-muted">
                {dict.trendScore}: {post.trendScore}
              </span>
            </div>

            <h1 className="mt-4 text-2xl font-black leading-tight text-ink sm:text-3xl">
              {title}
            </h1>

            <p className="mt-3 font-mono text-xs text-muted">
              {dict.source}: {post.source} · {timeAgo(post.created_at, lang)} · {post.readMinutes}{" "}
              {dict.minRead}
            </p>

            <div className="mt-6 flex flex-col gap-4 text-[15px] leading-relaxed text-ink/90">
              {body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-line pt-4">
              <span className="text-xs font-semibold text-muted">{dict.tags}:</span>
              {tags.map((t) => (
                <span
                  key={t}
                  className="rounded-xs bg-paper px-2 py-0.5 text-xs font-medium text-ink"
                >
                  #{t}
                </span>
              ))}
            </div>

            <div className="mt-4 border-t border-line pt-4">
              <InteractionBar
                likes={post.likes}
                commentsCount={post.commentsCount}
                lang={lang}
                dict={dict}
              />
            </div>
          </div>

          {related.length > 0 && (
            <section className="mt-10">
              <h2 className="mb-4 text-lg font-bold text-ink">{dict.relatedPosts}</h2>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                {related.map((p) => (
                  <NewsCard key={p.id} post={p} lang={lang} />
                ))}
              </div>
            </section>
          )}

          <div className="mt-10 rounded-md border border-line bg-surface p-5 sm:p-8">
            <CommentList comments={baseComments} lang={lang} totalCount={post.commentsCount} />
          </div>
        </div>
      </div>
    </div>
  );
}
