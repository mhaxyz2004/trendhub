import { CategoryPageContent } from "@/components/CategoryPageContent";
import type { Lang } from "@/lib/i18n";

export default function SpacePage({ params }: { params: { lang: Lang } }) {
  return <CategoryPageContent slug="space" lang={params.lang} />;
}
