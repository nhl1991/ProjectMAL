"use client";
import { useTranslations } from "next-intl";
import PosterCarousel from "./shared/PosterCarousel";
import SectionHeader from "./shared/SectionHeader";
import { usePreviewQuery } from "./shared/usePreviewQuery";

const RANK_COLORS = ["text-[#FFD700]", "text-[#C0C0C0]", "text-[#CD7F32]"];

export default function Top5Section() {
  const t = useTranslations("home.top5");
  const preview = usePreviewQuery(
    ["ranking", "top5", "airing"],
    "ranking?value=airing&limit=5",
  );

  return (
    <div className="w-full">
      <SectionHeader title={t("title")} />
      <PosterCarousel
        {...preview}
        emphasis
      />
    </div>
  );
}
