"use client"
import { queryClient } from "@/lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import SeasonResults from "./components/SeasonResults";
import { useOptionStore } from "@/lib/stores";
import SeasonType from "./components/SeasonType";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

export default function AnimationSeasonSection(){
    const { season, year, setSeasonType, setSeasonYear } = useOptionStore();
    const query = `${year}/${season}`
    const searchParams = useSearchParams();
    const t = useTranslations('season');

    useEffect(() => {
        const seasonParam = searchParams.get('season');
        const yearParam = searchParams.get('year');
        if (seasonParam) setSeasonType(seasonParam);
        if (yearParam) setSeasonYear(yearParam);
    }, [searchParams, setSeasonType, setSeasonYear]);

    return(
        <QueryClientProvider client={queryClient}>
            <div className="px-5 pt-5">
                <h1 className="text-xl font-medium">{t("title")}</h1>
                <p className="text-xs text-muted-foreground mt-0.5">{t("subtitle")}</p>
            </div>

            <SeasonType />
            <SeasonResults query={query} />
        </QueryClientProvider>
    )
}
