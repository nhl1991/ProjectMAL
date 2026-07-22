import { Suspense } from "react";
import AnimationSeasonSection from "@/components/season/AnimationSeasonSection";
export default function Page() {


    return (
        <Suspense>
            <AnimationSeasonSection />
        </Suspense>
    )
}