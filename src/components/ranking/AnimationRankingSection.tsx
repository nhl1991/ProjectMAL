'use client'
import { queryClient } from "@/lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import RankingResults from "./components/RankingResults";
import { useOptionStore } from "@/lib/stores";
import RankingType from "./components/RankingType";

export default function AnimationRankingSection() {
    const { rankingType } = useOptionStore();
    return (
        <QueryClientProvider client={queryClient}>
            <RankingType />
            <RankingResults query={rankingType} />
        </QueryClientProvider>
    )
}