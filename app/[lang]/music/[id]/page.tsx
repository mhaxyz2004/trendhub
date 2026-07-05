import Image from "next/image";
import { notFound } from "next/navigation";
import { Disc3, Calendar } from "lucide-react";
import { InteractionBar } from "@/components/InteractionBar";
import { CommentList } from "@/components/CommentList";
import { MusicCard } from "@/components/MusicCard";
import { SongPlayButton } from "@/components/SongPlayButton";
import { getDictionary, type Lang } from "@/lib/i18n";
import { songs, getSong } from "@/lib/mock/music";
import { baseComments } from "@/lib/mock/comments";
import { formatCount, timeAgo } from "@/lib/utils";

export function generateStaticParams() {
  return songs.map((s) => ({ id: s.id }));
}

export default function SongDetailPage({
  params,
}: {
  params: { lang: Lang; id: string };
}) {
  const { lang, id } = params;
  const dict = getDictionary(lang);
  const song = getSong(id);
  if (!song) notFound();

  const title = lang === "fa" ? song.title_fa : song.title_en;
  const artist = lang === "fa" ? song.artist_fa : song.artist_en;
  const album = lang === "fa" ? song.album_fa : song.album_en;
  const genre = lang === "fa" ? song.genre_fa : song.genre_en;
  const body = lang === "fa" ? song.body_fa : song.body_en;
  const related = songs.filter((s) => s.id !== song.id).slice(0, 3);

  return (
    <div className="container py-6 sm:py-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
        <div className="mx-auto w-full max-w-[280px] lg:mx-0">
          <div className="relative aspect-square overflow-hidden rounded-md shadow-lg">
            <Image src={song.cover} alt={title} fill sizes="280px" className="object-cover" />
            <SongPlayButton />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <span className="text-xs font-bold uppercase tracking-wide text-signal-500">
            {genre}
          </span>
          <h1 className="mt-2 text-2xl font-black text-ink sm:text-3xl">{title}</h1>
          <p className="mt-1 text-base font-semibold text-muted">{artist}</p>
          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted">
            <span className="flex items-center gap-1.5">
              <Disc3 className="h-4 w-4" />
              {album}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {timeAgo(song.releaseDate, lang)}
            </span>
            <span className="font-mono text-ember-500 font-semibold">
              {dict.trendScore}: {song.trendScore}
            </span>
          </div>
          <p className="mt-3 font-mono text-sm text-muted">
            {formatCount(song.streams, lang)} {lang === "fa" ? "پخش" : "streams"} · {song.duration}
          </p>
          <div className="mt-4">
            <InteractionBar
              likes={song.likes}
              commentsCount={song.commentsCount}
              lang={lang}
              dict={dict}
            />
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_300px]">
        <div className="flex flex-col gap-8">
          <section className="rounded-md border border-line bg-surface p-5 sm:p-6">
            <div className="flex flex-col gap-4 text-[15px] leading-relaxed text-ink/90">
              {body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>

          <section className="rounded-md border border-line bg-ember-50 p-5 sm:p-6">
            <p className="text-xs font-bold uppercase tracking-wide text-ember-500">
              {dict.whyTrending}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink/90">
              {lang === "fa" ? song.whyTrending_fa : song.whyTrending_en}
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-ink">{dict.socialBuzz}</h2>
            <div className="flex flex-col gap-3">
              {song.socialBuzz.map((b, i) => (
                <div key={i} className="rounded-md border border-line bg-surface p-4">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-bold text-ink">{b.author}</span>
                    <span className="text-muted">{b.handle}</span>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/90">
                    {lang === "fa" ? b.text_fa : b.text_en}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <div className="rounded-md border border-line bg-surface p-5 sm:p-6">
            <CommentList comments={baseComments} lang={lang} totalCount={song.commentsCount} />
          </div>
        </div>

        <aside className="flex flex-col gap-3">
          <h3 className="text-base font-bold text-ink">{dict.relatedPosts}</h3>
          {related.map((s) => (
            <MusicCard key={s.id} song={s} lang={lang} />
          ))}
        </aside>
      </div>
    </div>
  );
}
