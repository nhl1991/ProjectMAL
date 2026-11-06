"use client";
import { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";
import { useTranslations } from "next-intl";
import { AnimationData } from "@/types/animation";
import PosterCard from "@/components/common/PosterCard";

import "swiper/css";
import "swiper/css/a11y";

type PosterCarouselProps = {
  data: AnimationData[];
  isPending: boolean;
  isError: boolean;
  onRetry: () => void;
  /** 슬라이드 수가 충분할 때 무한 루프 여부 */
  loop?: boolean;
  /** 포스터 위에 겹쳐 그릴 뱃지 (예: 순위) */
  renderBadge?: (index: number) => ReactNode;
  /** 호버 시 제목/별점을 크게 표시 */
  emphasis?: boolean;
};

export default function PosterCarousel({
  data,
  isPending,
  isError,
  onRetry,
  loop = false,
  emphasis = false,
}: PosterCarouselProps) {
  const common = useTranslations("common");

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 py-8 text-center">
        <p className="text-sm text-muted-foreground">{common("loadError")}</p>
        <button
          onClick={() => onRetry()}
          className="text-xs text-[#7F77DD] hover:underline"
        >
          {common("retry")}
        </button>
      </div>
    );
  }

  if (isPending) {
    return (
      <div className="flex gap-3 overflow-hidden">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="w-1/3 md:w-1/5 flex-shrink-0 aspect-[2/3] rounded-lg bg-slate-300 dark:bg-slate-800 animate-pulse"
          />
        ))}
      </div>
    );
  }

  return (
    <Swiper
      modules={[A11y]}
      spaceBetween={12}
      slidesPerView={3}
      loop={loop && data.length >= 6}
      grabCursor
      breakpoints={{ 768: { slidesPerView: 5 } }}
      className="!h-auto"
      watchSlidesProgress
    >
      {data.map(({ node, ranking }) => (
        <SwiperSlide key={node.id} className="!h-auto">
          <PosterCard poster={{ node: node, ranking: ranking }} emphasis />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
