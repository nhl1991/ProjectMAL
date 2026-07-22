'use client'
import { queryClient } from "@/lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import RankingResults from "./components/RankingResults";
import { useOptionStore } from "@/lib/stores";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const TABS = ["all", "airing", "upcoming", "tv", "ova", "movie", "special", "bypopularity", "favorite"] as const

export default function AnimationRankingSection() {
    const { rankingType, setRankingType } = useOptionStore();
    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        const rankingTypeParam = searchParams.get('ranking_type');
        if (rankingTypeParam) setRankingType(rankingTypeParam);
    }, [searchParams, setRankingType]);

    const handleTabClick = (tab: string) => {
        setRankingType(tab);
        router.replace(`/ranking/list?ranking_type=${tab}`, { scroll: false });
    };

    return (
        <QueryClientProvider client={queryClient}>
            <div className="px-5 pt-5">
                <h1 className="text-xl font-medium">Ranking</h1>
                <p className="text-xs text-muted-foreground mt-0.5">MyAnimeList 기준 인기 순위</p>
            </div>

            <div className="flex border-b border-border px-5 mt-3.5">
                {TABS.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => handleTabClick(tab)}
                        className={`px-4 py-2 text-xs font-medium -mb-px border-b-2 transition-colors ${
                            rankingType === tab
                                ? "text-[#7F77DD] border-[#7F77DD]"
                                : "text-muted-foreground border-transparent hover:text-foreground"
                        }`}
                    >
                        {tab.toUpperCase()}
                    </button>
                ))}
            </div>

            <RankingResults query={rankingType} />
        </QueryClientProvider>
    )
}
