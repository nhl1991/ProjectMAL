import Image from "next/image";
import Link from "next/link";
import DetailsContentWrapper from "@/components/details/ui/DetailsContentWrapper";
import { Picture } from "@/types/animation";
import DetailsContentHero from "./DetailContentHero";

export default function RelatedImages({ pictures }: { pictures: Picture[] }) {
  return (
    <DetailsContentWrapper>
      <DetailsContentHero>관련 이미지</DetailsContentHero>
      <div className="grid grid-cols-5 gap-2">
        {pictures.map((p: Picture, idx: number) => (
          <Link
            key={idx}
            href={p.large ?? p.medium}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`관련 이미지 ${idx + 1} (새 탭에서 열기)`}
            className="relative aspect-[3/4] rounded-md overflow-hidden bg-slate-300 dark:bg-slate-800"
          >
            <Image
              src={p.large ?? p.medium}
              alt={`관련 이미지 ${idx + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 20vw, 12vw"
              loading="lazy"
            />
          </Link>
        ))}
      </div>
    </DetailsContentWrapper>
  );
}
