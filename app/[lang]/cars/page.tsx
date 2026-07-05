import { CategoryPageContent } from "@/components/CategoryPageContent";
import type { Lang } from "@/lib/i18n";

export default function CarsPage({ params }: { params: { lang: Lang } }) {
  return <CategoryPageContent slug="cars" lang={params.lang} />;
}
