import { CategoryPageContent } from "@/components/CategoryPageContent";
import type { Lang } from "@/lib/i18n";

export default function AiPage({ params }: { params: { lang: Lang } }) {
  return <CategoryPageContent slug="ai" lang={params.lang} />;
}
