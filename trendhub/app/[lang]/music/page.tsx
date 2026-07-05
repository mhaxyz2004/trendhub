import Image from "next/image";
import { CategoryHeader } from "@/components/CategoryHeader";
import { MusicCard } from "@/components/MusicCard";
import { getDictionary, type Lang } from "@/lib/i18n";
import { getCategory } from "@/lib/mock/categories";
import { getTrendingSongs, artists, albums } from "@/lib/mock/music";
import { formatCount } from "@/lib/utils";

export default function MusicPage({ params }: { params: { lang: Lang } }) {
  const lang = params.lang;
  const dict = getDictionary(lang);
  const category = getCategory("music")!;
  const songs = getTrendingSongs(8);

  return (
    <div className="container py-6 sm:py-8">
      <CategoryHeader category={category} lang={lang} />

      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
        <div className="flex flex-col gap-10">
          <section>
            <h2 className="mb-4 text-xl font-black text-ink">{dict.trendingSongs}</h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {songs.map((song, i) => (
                <MusicCard key={song.id} song={song} lang={lang} rank={i + 1} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-black text-ink">{dict.popularAlbums}</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {albums.map((album) => (
                <div key={album.id} className="group">
                  <div className="relative aspect-square overflow-hidden rounded-md">
                    <Image
                      src={album.cover}
                      alt={lang === "fa" ? album.title_fa : album.title_en}
                      fill
                      sizes="(max-width: 768px) 45vw, 200px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-2 text-sm font-bold text-ink line-clamp-1">
                    {lang === "fa" ? album.title_fa : album.title_en}
                  </h3>
                  <p className="text-xs text-muted">
                    {lang === "fa" ? album.artist_fa : album.artist_en} · {album.year}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="flex flex-col gap-4">
          <h3 className="text-base font-bold text-ink">{dict.trendingArtists}</h3>
          <div className="flex flex-col gap-3">
            {artists.map((artist) => (
              <div
                key={artist.id}
                className="flex items-center gap-3 rounded-md border border-line bg-surface p-3"
              >
                <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={artist.avatar}
                    alt={lang === "fa" ? artist.name_fa : artist.name_en}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold text-ink">
                    {lang === "fa" ? artist.name_fa : artist.name_en}
                  </p>
                  <p className="truncate text-xs text-muted">
                    {lang === "fa" ? artist.genre_fa : artist.genre_en} ·{" "}
                    {formatCount(artist.monthlyListeners, lang)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
