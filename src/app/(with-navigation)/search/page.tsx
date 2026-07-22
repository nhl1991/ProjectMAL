import { Suspense } from "react";
import AnimationSearchSection from "@/components/search/AnimationSearchSection";

export default function Page() {
  return (
    <Suspense>
      <AnimationSearchSection />
    </Suspense>
  );
}
