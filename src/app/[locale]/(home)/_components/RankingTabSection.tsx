"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import PosterCarousel from "./shared/PosterCarousel";
import SectionHeader from "./shared/SectionHeader";
import TabChips from "./shared/TabChips";
import { usePreviewQuery } from "./shared/usePreviewQuery";

const TABS = ["all", "airing", "upcoming", "tv", "ova", "movie", "special", "bypopularity", "favorite"] as const;
type RankingTab = (typeof TABS)[number];

export default function RankingTabSection() {
  const [rankingType, setRankingType] = useState<RankingTab>("all");
  const t = useTranslations("ranking");
  const preview = usePreviewQuery(
    ["ranking-preview", rankingType],
    `ranking?value=${rankingType}&limit=10`,
  );

  return (
    <div className="w-full">
      <SectionHeader
        title={t("title")}
        href={`/ranking?ranking_type=${rankingType}`}
      />
      <TabChips
        tabs={TABS}
        value={rankingType}
        onChange={setRankingType}
        getLabel={(tab) => t(`types.${tab}`)}
      />
      <PosterCarousel
        {...preview}
        loop
        renderBadge={(i) => (
          <span className="absolute top-1.5 left-1.5 w-5 h-5 rounded-full bg-black/65 text-white text-[10px] font-bold flex items-center justify-center">
            {i + 1}
          </span>
        )}
      />
    </div>
  );
}
