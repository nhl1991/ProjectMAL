"use client";

import { AnimationData } from "@/types/animation";
import { useInfiniteQuery } from "@tanstack/react-query";
import AnimationCard from "../common/AnimationCard";
import AnimationGridWrapper from "../common/AnimationGridWrapper";
import ResultsSection from "../common/ResultsSection";
import StatusSection from "../common/StatusSection";
import LoadingIndicator from "../common/ui/LoadingIndicator";
import PageLoading from "../common/fallbacks/PreviewLoadingFallback";
import PreviewLoadingFallback from "../common/fallbacks/PreviewLoadingFallback";
import ErrorFallback from "../common/fallbacks/ErrorFallback";

const search = async ({ pageParam }: { pageParam: string }) => {
  const response = await fetch(`/api/search?${pageParam}`, {
    method: "get",
  });
  //   const result = await response.json()
  const result = await response.json();

  if (response.ok) {
    return result;
  } else {
    if (result.message === "invalid q") throw new Error(`No results`);
    else throw new Error(result.message);
  }
};

export default function SearchResults({ query }: { query: string }) {
  const {
    data,
    error,
    status,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    retry: false,
    queryKey: ["animation", "search", query],
    queryFn: search,
    initialPageParam: `offset=0&q=${query}`,
    getNextPageParam: ({ paging = {}}) =>{
      if (!paging.next) return null;
      return `${paging.next.split("?")[1]}`},
  });
  if (status === "pending") return <PreviewLoadingFallback />
  if (status === "error") return <ErrorFallback e={error} />
  if (status === "success")
    if (!data) return <StatusSection><p>No data. Try something else</p></StatusSection>
  return (
    <>
      <ResultsSection>
        {data.pages.map((page, pageIndex) => {
          return (
            <AnimationGridWrapper key={pageIndex}>
              {page.data.map((item: AnimationData) => {
                const { id } = item.node;
                return <AnimationCard key={id} item={item} />;
              })}
            </AnimationGridWrapper>
          );
        })}
      </ResultsSection>
      <footer className="py-4 flex items-center justify-center">
        {hasNextPage ? (
          isFetchingNextPage ? (
            <LoadingIndicator />
          ) : (
            <button className="btn-hover" onClick={() => fetchNextPage()}>
              NEXT
            </button>
          )
        ) : (
          "LASTPAGE"
        )}
      </footer>
    </>
  );
}
