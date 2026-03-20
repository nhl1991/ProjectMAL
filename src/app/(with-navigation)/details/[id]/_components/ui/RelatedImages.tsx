"use client";
import AnimationImageCard from "@/components/details/AnimationImageCard";
import DetailGridWrapper from "@/components/details/ui/AnimationDetailGridWrapper";
import DetailsContentWrapper from "@/components/details/ui/DetailsContentWrapper";
import { Picture } from "@/types/animation";
import DetailsContentHero from "./DetailContentHero";

export default function RelatedImages({ pictures }: { pictures: Picture[] }) {
  return (
    <DetailsContentWrapper>
      <DetailsContentHero>
        RELATED IMAGES
      </DetailsContentHero>
      <DetailGridWrapper>
        {pictures.map((p: Picture, idx: number) => (
          <AnimationImageCard key={idx} src={p} />
        ))}
      </DetailGridWrapper>
    </DetailsContentWrapper>
  );
}
