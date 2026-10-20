import AnimationPreviewSection from "@/components/common/AnimationPreviewSection";
import { SEASONTYPE } from "@/lib/variables";

export default function Page() {
    return (
        <>
            <AnimationPreviewSection category={`season`} values={SEASONTYPE}/>
        </>
    )
}