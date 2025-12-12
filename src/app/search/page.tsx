"use client";
import AnimeSearchResults from "@/components/search/AnimationSearchResult";
import { queryClient } from "@/lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { useRef, useState } from "react";

export default function Page() {
  // req https://api.myanimelist.net/v2/anime?offset=4&q=one&limit=4
  const [query, setQuery] = useState("");
  const queryRef = useRef<HTMLInputElement>(null);
  const handleOnClick = () => {
    if (!queryRef.current) return;
    console.log("으아", query);
    setQuery(queryRef.current.value);
  };
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="flex items-center justify-center gap-y-8 py-4 flex-col">
          <h1 className="font-bold md:text-4xl p-4">
            What animation are you looking for?
          </h1>
          <div className="flex gap-x-2 p-2">
            <input
              ref={queryRef}
              className="bg-transparent border-b-2 border-transparent focus:outline-none focus:border-sky-400 transition-colors duration-500 px-2 w-48"
              placeholder="Search"
              type="text"
              name="query"
            />
            <button
              className="btn-hover"
              type="button"
              name="search"
              onClick={handleOnClick}
            >
              SEARCH
            </button>
          </div>
        </div>
        <section className="w-full min-h-screen flex flex-col items-center md:justify-center">
          {query != "" ? <AnimeSearchResults query={query} /> : null}
        </section>
      </QueryClientProvider>
    </>
  );
}
