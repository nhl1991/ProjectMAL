'use client'
import PageWrapper from "@/components/PageWrapper";
import RankingList from "@/components/ranking/components/RankingList";
import { queryClient } from "@/lib/queryClient";
import { useOptionStore } from "@/lib/stores";
import { QueryClientProvider } from "@tanstack/react-query";



export default function Page() {
    const { rankingType } = useOptionStore();

    return (
        <PageWrapper>
            <QueryClientProvider client={queryClient}>
                <RankingList ranking_type={rankingType} />
            </QueryClientProvider>
        </PageWrapper>
    )

}