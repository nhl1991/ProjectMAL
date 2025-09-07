'use client'
import PageWrapper from "@/components/PageWrapper";
import SeasonList from "@/components/season/components/SeasonList";
import { queryClient } from "@/lib/queryClient";
import { useOptionStore } from "@/lib/stores";
import { QueryClientProvider } from "@tanstack/react-query";


export default function Page(){
    const { season, year } = useOptionStore();


    return(
        <PageWrapper>
            <QueryClientProvider client={queryClient}>
                <SeasonList season={season} year={year} />
            </QueryClientProvider>
        </PageWrapper>
    )
}