import { CategoryPageContent } from "@/components/CategoryPageContent";
import type { Lang } from "@/lib/i18n";

export default function TechPage({ params }: { params: { lang: Lang } }) {
  return <CategoryPageContent slug="tech" lang={params.lang} />;
}
