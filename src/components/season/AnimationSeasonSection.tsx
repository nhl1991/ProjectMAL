"use client"
import { queryClient } from "@/lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import SeasonResults from "./components/SeasonResults";
import { useOptionStore } from "@/lib/stores";
import SeasonType from "./components/SeasonType";

export default function AnimationSeasonSection(){
    const { season, year } = useOptionStore();
    const query = `${year}/${season}`

    return(
        <QueryClientProvider client={queryClient}>
            <SeasonType />
            <SeasonResults query={query} />
        </QueryClientProvider>
    )
}