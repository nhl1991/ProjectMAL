"use client"
import { queryClient } from "@/lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import SeasonResults from "./components/SeasonResults";
import { useOptionStore } from "@/lib/stores";
import SeasonType from "./components/SeasonType";

export default function AnimationSeasonSection(){
    const currentYear = new Date().getFullYear();
    const SEASON = ['winter', 'spring', 'summer', 'fall'];
    const { season, year } = useOptionStore();
    const query = `${year}/${season}`

    return(
        <QueryClientProvider client={queryClient}>
            <SeasonType />
            <SeasonResults query={query} />
        </QueryClientProvider>
    )
}