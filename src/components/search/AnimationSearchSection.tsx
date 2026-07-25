"use client";

import { queryClient } from "@/lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import SearchResults from "./AnimationSearchResult";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import SearchHero from "./ui/SearchHero";
import SearchForm from "./SearchForm";
import PopularSearchChips from "./PopularSearchChips";
import RecentSearchList from "./RecentSearchList";
import { saveRecentSearch } from "@/lib/recentSearch";

export default function AnimationSearchSection() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";

  const [input, setInput] = useState(initialQuery);
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuery(input.trim());
    }, 400);
    return () => clearTimeout(timer);
  }, [input]);

  useEffect(() => {
    if (query) {
      router.replace(`/search?q=${encodeURIComponent(query)}`, { scroll: false });
    } else {
      router.replace("/search", { scroll: false });
    }
  }, [query, router]);

  const handleSelectQuery = (q: string) => {
    setInput(q);
    setQuery(q);
    saveRecentSearch(q);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <div
          className={`flex flex-col items-center justify-center gap-y-4 py-2 px-5 ${query != "" ? "" : "h-[60vh]"}`}
        >
          <SearchHero title="어떤 애니를 찾고 있나요?" />
          <SearchForm value={input} onChange={setInput} />

          {query == "" && (
            <div className="w-full max-w-md flex flex-col gap-y-6 mt-4">
              <PopularSearchChips onSelect={handleSelectQuery} />
              <RecentSearchList onSelect={handleSelectQuery} />
            </div>
          )}
        </div>
        <div className="py-4">{query != "" ? <SearchResults query={query} /> : null}</div>
      </main>
    </QueryClientProvider>
  );
}
