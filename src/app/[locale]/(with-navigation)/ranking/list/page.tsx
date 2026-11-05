import { Suspense } from "react";
import AnimationRankingSection from "@/components/ranking/AnimationRankingSection";
import { setRequestLocale } from "next-intl/server";
export default async function Page({ params }: { params: Promise<{ locale: string }>}) {
    const locale = (await params).locale;
    setRequestLocale(locale);
    return (
        <Suspense>
            <AnimationRankingSection />
        </Suspense>
    )

}