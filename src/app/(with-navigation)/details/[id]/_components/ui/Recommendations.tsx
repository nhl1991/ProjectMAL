import Image from "next/image";
import Link from "next/link";
import DetailsContentWrapper from "@/components/details/ui/DetailsContentWrapper";
import { AnimationData } from "@/types/animation";
import { getTitle } from "@/lib/utils";
import DetailContentHero from "./DetailContentHero";

export default function Recommendations({
  recommendations,
}: {
  recommendations: AnimationData[];
}) {
  return (
    <DetailsContentWrapper>
      <DetailContentHero>추천 애니메이션</DetailContentHero>
      <div className="grid grid-cols-5 gap-2">
        {recommendations.map((r: AnimationData) => (
          <Link
            key={r.node.id}
            href={`/details/${r.node.id}`}
            className="relative aspect-[2/3] rounded-lg overflow-hidden bg-slate-300 dark:bg-slate-800"
          >
            <Image
              src={r.node.main_picture.large}
              alt={r.node.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 20vw, 12vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-1.5">
              <p className="text-white text-[11px] font-medium">{getTitle(r.node)}</p>
            </div>
          </Link>
        ))}
      </div>
    </DetailsContentWrapper>
  );
}
