import Image from "next/image";
import type { Category } from "@/lib/mock/categories";
import type { Lang } from "@/lib/i18n";

export function CategoryHeader({ category, lang }: { category: Category; lang: Lang }) {
  const name = lang === "fa" ? category.name_fa : category.name_en;
  const desc = lang === "fa" ? category.desc_fa : category.desc_en;

  return (
    <div className="relative overflow-hidden rounded-md border border-line">
      <div className="relative h-40 w-full sm:h-52">
        <Image src={category.cover} alt={name} fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
        <p
          className="mb-1.5 inline-block rounded-xs px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white"
          style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
        >
          #{category.slug}
        </p>
        <h1 className="text-2xl font-black text-white sm:text-3xl">{name}</h1>
        <p className="mt-1.5 max-w-xl text-sm text-white/85 sm:text-[15px]">{desc}</p>
      </div>
    </div>
  );
}
