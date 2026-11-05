"use client";
import { useTranslations } from "next-intl";
import PosterCarousel from "./shared/PosterCarousel";
import SectionHeader from "./shared/SectionHeader";
import { usePreviewQuery } from "./shared/usePreviewQuery";

const RANK_COLORS = ["text-[#FFD700]", "text-[#C0C0C0]", "text-[#CD7F32]"];

export default function Top5Section() {
  const t = useTranslations("home.top5");
  const { data, isPending, isError, refetch } = usePreviewQuery(
    ["ranking", "top5", "airing"],
    "ranking?value=airing&limit=5",
  );

  return (
    <div className="w-full">
      <SectionHeader title={t("title")} />
      <PosterCarousel
        data={data}
        isPending={isPending}
        isError={isError}
        onRetry={refetch}
        emphasis
        renderBadge={(i) => (
          <span
            className={`absolute -bottom-2 -left-1 text-6xl font-black leading-none [-webkit-text-stroke:1px_black] ${RANK_COLORS[i] ?? "text-white"} opacity-60`}
          >
            {i + 1}
          </span>
        )}
      />
    </div>
  );
}
