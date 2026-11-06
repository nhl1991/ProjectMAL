"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { SEASONTYPE, getCurrentSeason } from "@/lib/variables";
import PosterCarousel from "./shared/PosterCarousel";
import SectionHeader from "./shared/SectionHeader";
import TabChips from "./shared/TabChips";
import { usePreviewQuery } from "./shared/usePreviewQuery";

type SeasonTab = (typeof SEASONTYPE)[number];

export default function SeasonTabSection() {
  const [season, setSeason] = useState<SeasonTab>(getCurrentSeason());
  const t = useTranslations("season");
  const preview = usePreviewQuery(
    ["season-preview", season],
    `season?value=${season}&limit=10`,
  );

  return (
    <div className="w-full">
      <SectionHeader title={t("title")} href={`/season/list?season=${season}`} />
      <TabChips
        tabs={SEASONTYPE}
        value={season}
        onChange={setSeason}
        getLabel={(tab) => t(`types.${tab}`)}
      />
      <PosterCarousel
        {...preview}
        loop
      />
    </div>
  );
}
