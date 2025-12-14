"use client"

import { queryClient } from "@/lib/queryClient"
import { QueryClientProvider } from "@tanstack/react-query"
import SearchResults from "./AnimationSearchResult"
import { useRef, useState } from "react";
import SearchHero from "./ui/SearchHero";
import SearchForm from "./SearchForm";

export default function AnimationSearchSection() {
    const [query, setQuery] = useState("");
    const queryRef = useRef<HTMLInputElement>(null);
    const handleOnClick = () => {
        if (!queryRef.current) return;
        setQuery(queryRef.current.value);
    };
    return (
        <QueryClientProvider client={queryClient}>
            <div className="flex items-center justify-center gap-y-8 py-4 flex-col">
                <SearchHero title="What animation are you looking for?" />
                <SearchForm onClick={handleOnClick} ref={queryRef} />
            </div>
            {query != "" ? <SearchResults query={query} /> : null}
        </QueryClientProvider>
    );
}