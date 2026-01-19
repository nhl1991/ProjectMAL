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
    <>
      <button className="font-bold py-1 text-2xl px-3 rounded-xl bg-sky-400 dark:bg-indigo-700 text-white">
        RECOMMENDATIONS
      </button>
      <DetailGridWrapper>
        {recommendations.map((r: AnimationData) => (
          <AnimationCard key={r.node.id} item={r} />
        ))}
      </DetailGridWrapper>
    </>
  );
}
