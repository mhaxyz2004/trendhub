import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { MovieTrendCard } from "@/components/MovieTrendCard";
import { getDictionary, type Lang } from "@/lib/i18n";
import { getCategory } from "@/lib/mock/categories";
import { movies, getTrendingMovies } from "@/lib/mock/movies";
import { CategoryHeader } from "@/components/CategoryHeader";

export default function MoviesPage({ params }: { params: { lang: Lang } }) {
  const lang = params.lang;
  const dict = getDictionary(lang);
  const category = getCategory("movies")!;
  const trending = getTrendingMovies(6);
  const top = trending[0];

  return (
    <div className="container py-6 sm:py-8">
      <CategoryHeader category={category} lang={lang} />

      {top && (
        <section className="mt-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-wide text-ember-500">
            {dict.topStory}
          </p>
          <Link
            href={`/${lang}/movies/${top.id}`}
            className="group grid grid-cols-1 gap-5 rounded-md border border-line bg-surface p-4 sm:grid-cols-[220px_1fr] sm:p-5"
          >
            <div className="relative aspect-[2/3] w-full overflow-hidden rounded-sm sm:w-[220px]">
              <Image
                src={top.poster}
                alt={lang === "fa" ? top.title_fa : top.title_en}
                fill
                sizes="220px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-xs font-semibold text-muted">
                <span className="flex items-center gap-1 text-amber-500">
                  <Star className="h-3.5 w-3.5 fill-amber-400" />
                  {top.rating}
                </span>
                <span>·</span>
                <span>{top.year}</span>
                <span>·</span>
                <span>{(lang === "fa" ? top.genres_fa : top.genres_en).join(" / ")}</span>
              </div>
              <h2 className="mt-2 text-xl font-black text-ink group-hover:text-signal-500 sm:text-2xl">
                {lang === "fa" ? top.title_fa : top.title_en}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-3">
                {lang === "fa" ? top.summary_fa : top.summary_en}
              </p>
              <div className="mt-3 rounded-sm bg-ember-50 p-3">
                <p className="text-xs font-bold uppercase tracking-wide text-ember-500">
                  {dict.whyTrending}
                </p>
                <p className="mt-1 text-sm text-ink/80">
                  {lang === "fa" ? top.whyTrending_fa : top.whyTrending_en}
                </p>
              </div>
            </div>
          </Link>
        </section>
      )}

      <section className="mt-10">
        <h2 className="mb-4 text-xl font-black text-ink">{dict.moviesTrending}</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {movies.map((movie) => (
            <MovieTrendCard key={movie.id} movie={movie} lang={lang} />
          ))}
        </div>
      </section>
    </div>
  );
}
