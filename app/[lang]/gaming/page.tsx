import { CategoryPageContent } from "@/components/CategoryPageContent";
import type { Lang } from "@/lib/i18n";

export default function GamingPage({ params }: { params: { lang: Lang } }) {
  return <CategoryPageContent slug="gaming" lang={params.lang} />;
}
