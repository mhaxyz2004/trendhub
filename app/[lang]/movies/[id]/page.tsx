import Image from "next/image";
import { notFound } from "next/navigation";
import { Star, Clock, Calendar, Users } from "lucide-react";
import { InteractionBar } from "@/components/InteractionBar";
import { CommentList } from "@/components/CommentList";
import { MovieTrendCard } from "@/components/MovieTrendCard";
import { getDictionary, type Lang } from "@/lib/i18n";
import { movies, getMovie } from "@/lib/mock/movies";
import { baseComments } from "@/lib/mock/comments";

export function generateStaticParams() {
  return movies.map((m) => ({ id: m.id }));
}

export default function MovieDetailPage({
  params,
}: {
  params: { lang: Lang; id: string };
}) {
  const { lang, id } = params;
  const dict = getDictionary(lang);
  const movie = getMovie(id);
  if (!movie) notFound();

  const title = lang === "fa" ? movie.title_fa : movie.title_en;
  const summary = lang === "fa" ? movie.summary_fa : movie.summary_en;
  const body = lang === "fa" ? movie.body_fa : movie.body_en;
  const genres = lang === "fa" ? movie.genres_fa : movie.genres_en;
  const related = movies.filter((m) => m.id !== movie.id).slice(0, 4);

  return (
    <div>
      <div className="relative h-[45vh] min-h-[320px] w-full">
        <Image src={movie.backdrop} alt={title} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-paper via-ink/50 to-ink/20" />
      </div>

      <div className="container -mt-24 pb-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[240px_1fr]">
          <div className="relative -mt-4 aspect-[2/3] w-40 overflow-hidden rounded-md border-4 border-surface shadow-xl sm:w-56 lg:w-full">
            <Image src={movie.poster} alt={title} fill sizes="240px" className="object-cover" />
          </div>

          <div className="pt-2 text-white lg:pt-16">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
              {genres.map((g) => (
                <span key={g} className="rounded-xs bg-white/15 px-2 py-0.5 backdrop-blur">
                  {g}
                </span>
              ))}
            </div>
            <h1 className="mt-3 text-2xl font-black leading-tight sm:text-4xl">{title}</h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
              {summary}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm font-medium text-white/85">
              <span className="flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                {movie.rating} / 10
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {movie.year}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {lang === "fa" ? movie.duration_fa : movie.duration_en}
              </span>
              {movie.seasons && (
                <span className="flex items-center gap-1.5">
                  <Users className="h-4 w-4" />
                  {movie.seasons} {dict.seasons}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
          <div className="flex flex-col gap-8">
            <section className="rounded-md border border-line bg-surface p-5 sm:p-6">
              <div className="flex flex-col gap-4 text-[15px] leading-relaxed text-ink/90">
                {body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-1.5 border-t border-line pt-4 text-xs text-muted">
                <span className="font-semibold text-ink">{dict.cast}:</span>
                {movie.cast.join(" · ")}
              </div>
              <div className="mt-4 border-t border-line pt-4">
                <InteractionBar
                  likes={movie.likes}
                  commentsCount={movie.commentsCount}
                  lang={lang}
                  dict={dict}
                />
              </div>
            </section>

            <section className="rounded-md border border-line bg-surface p-5 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-wide text-ember-500">
                {dict.whyTrending}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink/90">
                {lang === "fa" ? movie.whyTrending_fa : movie.whyTrending_en}
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-bold text-ink">{dict.socialBuzz}</h2>
              <div className="flex flex-col gap-3">
                {movie.socialBuzz.map((b, i) => (
                  <div key={i} className="rounded-md border border-line bg-surface p-4">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-bold text-ink">{b.author}</span>
                      <span className="text-muted">{b.handle}</span>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/90">
                      {lang === "fa" ? b.text_fa : b.text_en}
                    </p>
                    <p className="mt-1.5 text-xs text-muted">
                      ♡ {b.likes.toLocaleString(lang === "fa" ? "fa-IR" : "en-US")}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <div className="rounded-md border border-line bg-surface p-5 sm:p-6">
              <CommentList comments={baseComments} lang={lang} totalCount={movie.commentsCount} />
            </div>
          </div>

          <aside className="flex flex-col gap-4">
            <h3 className="text-base font-bold text-ink">{dict.relatedPosts}</h3>
            <div className="grid grid-cols-2 gap-4">
              {related.map((m) => (
                <MovieTrendCard key={m.id} movie={m} lang={lang} />
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
