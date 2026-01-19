"use client";
import AnimationImageCard from "@/components/details/AnimationImageCard";
import DetailGridWrapper from "@/components/details/ui/AnimationDetailGridWrapper";
import { Picture } from "@/types/animation";
import { useState } from "react";

export default function RelatedImages({ pictures }: { pictures: Picture[] }) {
  return (
    <>
      <button className="w-max font-bold py-1 text-2xl px-3 rounded-xl bg-sky-400 dark:bg-indigo-700 text-white">
        RELATED IMAGES
      </button>
      <DetailGridWrapper>
        {pictures.map((p: Picture, idx: number) => (
          <AnimationImageCard key={idx} src={p} />
        ))}
      </DetailGridWrapper>
    </>
  );
}
