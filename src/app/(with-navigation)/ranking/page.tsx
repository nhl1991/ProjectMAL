import AnimationPreviewSection from "@/components/common/AnimationPreviewSection";
import { RANKING_TYPE } from "@/lib/variables";

export default async function Page() {

  return (
    <>
      <AnimationPreviewSection category="ranking" values={RANKING_TYPE}/>
    </>
  );
}
