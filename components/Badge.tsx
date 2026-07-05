import { cn } from "@/lib/utils";
import type { CategorySlug } from "@/lib/mock/categories";
import { Flame } from "lucide-react";

const categoryStyles: Record<CategorySlug, string> = {
  ai: "bg-cat-ai/10 text-cat-ai border-cat-ai/20",
  tech: "bg-cat-tech/10 text-cat-tech border-cat-tech/20",
  gaming: "bg-cat-gaming/10 text-cat-gaming border-cat-gaming/20",
  cars: "bg-cat-cars/10 text-cat-cars border-cat-cars/20",
  space: "bg-cat-space/10 text-cat-space border-cat-space/20",
  movies: "bg-cat-movies/10 text-cat-movies border-cat-movies/20",
  music: "bg-cat-music/10 text-cat-music border-cat-music/20",
};

export function CategoryBadge({
  category,
  label,
  className,
}: {
  category: CategorySlug;
  label: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-xs border px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide",
        categoryStyles[category],
        className
      )}
    >
      {label}
    </span>
  );
}

export function TrendingBadge({ label, className }: { label: string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-xs bg-ember-50 px-2 py-0.5 text-[11px] font-semibold text-ember-500",
        className
      )}
    >
      <Flame className="h-3 w-3" />
      {label}
    </span>
  );
}

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-xs border border-line bg-paper px-2 py-0.5 text-[11px] font-medium text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
