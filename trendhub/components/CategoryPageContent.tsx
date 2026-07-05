import { CategoryHeader } from "@/components/CategoryHeader";
import { NewsCard } from "@/components/NewsCard";
import { TrendingCard } from "@/components/TrendingCard";
import { getDictionary, type Lang } from "@/lib/i18n";
import { getCategory, type CategorySlug } from "@/lib/mock/categories";
import { getPostsByCategory } from "@/lib/mock/posts";
import { getTopTrends } from "@/lib/mock/trends";
import { notFound } from "next/navigation";

export function CategoryPageContent({ slug, lang }: { slug: CategorySlug; lang: Lang }) {
  const dict = getDictionary(lang);
  const category = getCategory(slug);
  if (!category) notFound();

  const posts = getPostsByCategory(slug);
  const featured = posts[0];
  const rest = posts.slice(1);
  const catTrends = getTopTrends(20).filter((t) => t.category === slug);

  return (
    <div className="container py-6 sm:py-8">
      <CategoryHeader category={category} lang={lang} />

      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_300px]">
        <div className="flex flex-col gap-8">
          {featured && (
            <section>
              <p className="mb-3 text-xs font-bold uppercase tracking-wide text-ember-500">
                {dict.topStory}
              </p>
              <NewsCard post={featured} lang={lang} layout="horizontal" />
            </section>
          )}

          <section>
            <h2 className="mb-4 text-lg font-bold text-ink">{dict.latestFeed}</h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {rest.map((post) => (
                <NewsCard key={post.id} post={post} lang={lang} />
              ))}
              {rest.length === 0 && featured && (
                <NewsCard post={featured} lang={lang} />
              )}
            </div>
          </section>
        </div>

        <aside className="flex flex-col gap-6 lg:sticky lg:top-20 lg:self-start">
          <div className="rounded-md border border-line bg-surface p-4">
            <h3 className="mb-3 text-base font-bold text-ink">{dict.categoryTrending}</h3>
            {catTrends.length === 0 ? (
              <p className="text-sm text-muted">—</p>
            ) : (
              <div className="flex flex-col divide-y divide-line">
                {catTrends.map((trend, i) => (
                  <TrendingCard key={trend.id} trend={trend} rank={i + 1} lang={lang} />
                ))}
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
