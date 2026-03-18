"use client";

import AnimationCard from "@/components/common/AnimationCard";
import AnimationGridWrapper from "@/components/common/AnimationGridWrapper";
import ResultsSection from "@/components/common/ResultsSection";
import StatusSection from "@/components/common/StatusSection";
import LoadingIndicator from "@/components/common/ui/LoadingIndicator";
import { AnimationData } from "@/types/animation";
import { useInfiniteQuery } from "@tanstack/react-query";
import PreviewLoadingFallback from "@/components/common/fallbacks/PreviewLoadingFallback";
import ErrorFallback from "@/components/common/fallbacks/ErrorFallback";
import ResultsFooter from "@/components/common/ResultsFooter";
import ResultsHero from "@/components/common/ResultsHero";

const search = async ({ pageParam }: { pageParam: string }) => {
  const response = await fetch(`/api/ranking?${pageParam}`, {
    method: "get",
  });
  const result = await response.json();
  if (response.ok) {
    return result;
  } else {
    if (result.message === "invalid q") throw new Error(`No results`);
    else if (result.error === "not_found") throw new Error(`Results Not Found`);
    else throw new Error(result.message);
  }
};

export default function RankingResults({ query }: { query: string }) {
  const {
    data,
    error,
    status,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    retry: false,
    queryKey: ["animation", "ranking", query],
    queryFn: search,
    initialPageParam: `ranking_type=${query}`,
    getNextPageParam: ({ paging = {} }) => {
      if (!paging.next) return null;
      return `${paging.next.split("?")[1]}`;
    },
  });
  if (status === "pending") return <PreviewLoadingFallback />;
  if (status === "error") return <ErrorFallback e={error} />;
  if (status === "success")
    if (!data)
      return (
        <StatusSection>
          <p>No data. Try something else</p>
        </StatusSection>
      );
  return (
    <>
      <ResultsHero title={query.toUpperCase()} />
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
      <ResultsFooter>
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
      </ResultsFooter>
    </>
  );
}
