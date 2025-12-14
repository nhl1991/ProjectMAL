import AnimationPreviewSection from "@/components/common/AnimationPreviewSection";
import { SEASON_TYPE } from "@/lib/variables";

export default function Page() {
    return (
        <>
            <AnimationPreviewSection category={`season`} values={SEASON_TYPE}/>
        </>
    )
}