import AnimationPreviewSection from "@/components/common/AnimationPreviewSection";
import { RANKINGTYPE } from "@/lib/variables";

export default async function Page() {

  return (
    <>
      <AnimationPreviewSection category="ranking" values={RANKINGTYPE}/>
    </>
  );
}
