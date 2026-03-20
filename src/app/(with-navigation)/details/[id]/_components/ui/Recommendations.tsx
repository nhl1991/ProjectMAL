"use client";
import AnimationCard from "@/components/common/AnimationCard";
import DetailGridWrapper from "@/components/details/ui/AnimationDetailGridWrapper";
import DetailsContentWrapper from "@/components/details/ui/DetailsContentWrapper";
import { AnimationData } from "@/types/animation";
import { useState } from "react";
import DetailContentHero from "./DetailContentHero";

export default function Recommendations({
  recommendations,
}: {
  recommendations: AnimationData[];
}) {
  return (
    <DetailsContentWrapper>
      <DetailContentHero>
        RECOMMENDATIONS
      </DetailContentHero>
      <DetailGridWrapper>
        {recommendations.map((r: AnimationData) => (
          <AnimationCard key={r.node.id} item={r} />
        ))}
      </DetailGridWrapper>
    </DetailsContentWrapper>
  );
}
