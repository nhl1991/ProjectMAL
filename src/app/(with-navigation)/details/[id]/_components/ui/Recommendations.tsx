"use client";
import AnimationCard from "@/components/common/AnimationCard";
import DetailGridWrapper from "@/components/details/ui/AnimationDetailGridWrapper";
import { AnimationData } from "@/types/animation";
import { useState } from "react";

export default function Recommendations({
  recommendations,
}: {
  recommendations: AnimationData[];
}) {
  return (
    <div className="py-12">
      <h2 className="w-full text-center font-bold py-1 text-2xl px-3 rounded-xl bg-sky-400 dark:bg-indigo-700 text-white">
        RECOMMENDATIONS
      </h2>
      <DetailGridWrapper>
        {recommendations.map((r: AnimationData) => (
          <AnimationCard key={r.node.id} item={r} />
        ))}
      </DetailGridWrapper>
    </div>
  );
}
