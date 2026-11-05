import { Suspense } from "react";
import AnimationSearchSection from "@/components/search/AnimationSearchSection";
import { setRequestLocale } from "next-intl/server";

export default async function Page({ params }: { params: Promise<{ locale: string }>}) {
  const locale = (await params).locale;
  setRequestLocale(locale);
  return (
    <Suspense>
      <AnimationSearchSection />
    </Suspense>
  );
}
