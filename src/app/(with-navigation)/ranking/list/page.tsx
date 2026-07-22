import { Suspense } from "react";
import AnimationRankingSection from "@/components/ranking/AnimationRankingSection";
export default function Page() {
    return (
        <Suspense>
            <AnimationRankingSection />
        </Suspense>
    )

}