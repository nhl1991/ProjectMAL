import { Suspense } from "react";
import AnimationSeasonSection from "@/components/season/AnimationSeasonSection";
import { setRequestLocale } from "next-intl/server";
export default async function Page({ params }: { params: Promise<{ locale: string }>}) {

  const locale = (await params).locale;
  setRequestLocale(locale);
  return (
      <Suspense>
          <AnimationSeasonSection />
      </Suspense>
  )
}