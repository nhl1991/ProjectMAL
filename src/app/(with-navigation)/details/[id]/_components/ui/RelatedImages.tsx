"use client";
import AnimationImageCard from "@/components/details/AnimationImageCard";
import DetailGridWrapper from "@/components/details/ui/AnimationDetailGridWrapper";
import { Picture } from "@/types/animation";

export default function RelatedImages({ pictures }: { pictures: Picture[] }) {
  return (
    <div className="py-12">
      <h2 className="w-full text-center font-bold py-1 text-2xl px-3 rounded-xl bg-sky-400 dark:bg-indigo-700 text-white">
        RELATED IMAGES
      </h2>
      <DetailGridWrapper>
        {pictures.map((p: Picture, idx: number) => (
          <AnimationImageCard key={idx} src={p} />
        ))}
      </DetailGridWrapper>
    </div>
  );
}
