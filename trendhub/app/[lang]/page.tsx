import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Flame } from "lucide-react";
import { NewsCard } from "@/components/NewsCard";
import { TrendingCard } from "@/components/TrendingCard";
import { MovieTrendCard } from "@/components/MovieTrendCard";
import { MusicCard } from "@/components/MusicCard";
import { CategoryBadge, TrendingBadge } from "@/components/Badge";
import { getDictionary, type Lang } from "@/lib/i18n";
import { getFeaturedPost, getLatestPosts, getPostsByCategory } from "@/lib/mock/posts";
import { categories } from "@/lib/mock/categories";
import { getTopTrends } from "@/lib/mock/trends";
import { getTrendingMovies } from "@/lib/mock/movies";
import { getTrendingSongs } from "@/lib/mock/music";
import { timeAgo } from "@/lib/utils";

export default function HomePage({ params }: { params: { lang: Lang } }) {
  const lang = params.lang;
  const dict = getDictionary(lang);
  const featured = getFeaturedPost();
  const latest = getLatestPosts(8).filter((p) => p.id !== featured.id);
  const topTrends = getTopTrends(8);
  const trendingMovies = getTrendingMovies(4);
  const trendingSongs = getTrendingSongs(4);

  const featuredCat = categories.find((c) => c.slug === featured.category)!;

  return (
    <div className="container py-6 sm:py-8">
      {/* Hero */}
      <section className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Link
          href={`/${lang}/post/${featured.id}`}
          className="group relative col-span-1 block overflow-hidden rounded-md lg:col-span-2"
        >
          <div className="relative aspect-[16/10] w-full sm:aspect-[16/8]">
            <Image
              src={featured.image}
              alt={lang === "fa" ? featured.title_fa : featured.title_en}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />
          </div>
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
            <p className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-ember-500">
              <Flame className="h-3.5 w-3.5" />
              {dict.heroKicker}
            </p>
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <CategoryBadge
                category={featured.category}
                label={lang === "fa" ? featuredCat.name_fa : featuredCat.name_en}
                className="bg-white/10 text-white border-white/20"
              />
              <TrendingBadge label={dict.trendingBadge} className="bg-white/10 text-white" />
            </div>
            <h1 className="max-w-2xl text-2xl font-black leading-tight text-white sm:text-3xl lg:text-4xl">
              {lang === "fa" ? featured.title_fa : featured.title_en}
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base line-clamp-2">
              {lang === "fa" ? featured.summary_fa : featured.summary_en}
            </p>
            <p className="mt-3 font-mono text-xs text-white/70">
              {featured.source} · {timeAgo(featured.created_at, lang)} · {featured.readMinutes} {dict.minRead}
            </p>
          </div>
        </Link>

        {/* Hot right now */}
        <div className="rounded-md border border-line bg-surface p-4">
          <h2 className="mb-1 flex items-center gap-1.5 text-base font-bold text-ink">
            <span className="trend-pulse" />
            {dict.hotRightNow}
          </h2>
          <div className="mt-2 flex flex-col divide-y divide-line">
            {topTrends.slice(0, 6).map((trend, i) => (
              <TrendingCard key={trend.id} trend={trend} rank={i + 1} lang={lang} />
            ))}
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
        {/* Main column */}
        <div className="flex flex-col gap-12">
          {/* Latest feed */}
          <section>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-black text-ink">{dict.latestFeed}</h2>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {latest.slice(0, 6).map((post) => (
                <NewsCard key={post.id} post={post} lang={lang} />
              ))}
            </div>
          </section>

          {/* Category blocks */}
          {categories
            .filter((c) => c.slug !== "movies" && c.slug !== "music")
            .map((cat) => {
              const catPosts = getPostsByCategory(cat.slug).slice(0, 3);
              if (catPosts.length === 0) return null;
              return (
                <section key={cat.slug}>
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-xl font-black text-ink">
                      {lang === "fa" ? cat.name_fa : cat.name_en}
                    </h2>
                    <Link
                      href={`/${lang}/${cat.slug}`}
                      className="flex items-center gap-1 text-sm font-semibold text-signal-500 hover:underline"
                    >
                      {dict.exploreCategory}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                  <div className="flex flex-col rounded-md border border-line bg-surface px-4">
                    {catPosts.map((post) => (
                      <NewsCard key={post.id} post={post} lang={lang} layout="horizontal" />
                    ))}
                  </div>
                </section>
              );
            })}

          {/* Movies preview */}
          <section>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-black text-ink">{dict.moviesTrending}</h2>
              <Link
                href={`/${lang}/movies`}
                className="flex items-center gap-1 text-sm font-semibold text-signal-500 hover:underline"
              >
                {dict.viewAll}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {trendingMovies.map((movie) => (
                <MovieTrendCard key={movie.id} movie={movie} lang={lang} />
              ))}
            </div>
          </section>

          {/* Music preview */}
          <section>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-black text-ink">{dict.trendingSongs}</h2>
              <Link
                href={`/${lang}/music`}
                className="flex items-center gap-1 text-sm font-semibold text-signal-500 hover:underline"
              >
                {dict.viewAll}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {trendingSongs.map((song, i) => (
                <MusicCard key={song.id} song={song} lang={lang} rank={i + 1} />
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="flex flex-col gap-6 lg:sticky lg:top-20 lg:self-start">
          <div className="rounded-md border border-line bg-surface p-4">
            <h3 className="mb-3 text-base font-bold text-ink">{dict.trendingList}</h3>
            <div className="flex flex-col divide-y divide-line">
              {topTrends.map((trend, i) => (
                <TrendingCard key={trend.id} trend={trend} rank={i + 1} lang={lang} />
              ))}
            </div>
          </div>

          <div className="rounded-md border border-line bg-ink p-5 text-white">
            <h3 className="text-base font-bold">
              {lang === "fa" ? "عضو خبرنامه ترندهاب شوید" : "Join the TrendHub newsletter"}
            </h3>
            <p className="mt-1.5 text-sm text-white/70">
              {lang === "fa"
                ? "هر روز صبح، خلاصه داغ‌ترین اخبار را در ایمیل خود دریافت کنید."
                : "Get a daily digest of the hottest stories, delivered every morning."}
            </p>
            <div className="mt-3 flex gap-2">
              <input
                type="email"
                placeholder={lang === "fa" ? "ایمیل شما" : "you@email.com"}
                className="h-9 w-full rounded-sm bg-white/10 px-3 text-sm text-white placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500"
              />
              <button className="flex-shrink-0 rounded-sm bg-ember-500 px-3 text-sm font-semibold text-white">
                {lang === "fa" ? "عضویت" : "Join"}
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
