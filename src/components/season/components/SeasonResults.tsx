"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import ResultsSection from "@/components/common/ResultsSection";
import StatusSection from "@/components/common/StatusSection";
import LoadingIndicator from "@/components/common/ui/LoadingIndicator";
import StarIcon from "@/components/common/icons/StarIcon";
import { getTitle } from "@/lib/utils";
import { AnimationData } from "@/types/animation";
import { useInfiniteQuery } from "@tanstack/react-query";
import PreviewLoadingFallback from "@/components/common/fallbacks/PreviewLoadingFallback";
import ErrorFallback from "@/components/common/fallbacks/ErrorFallback";
import ResultsFooter from "@/components/common/ResultsFooter";
import { normalizeAnimationData } from "@/lib/normalizeAnimationData";
import { useTranslations } from "next-intl";
import PosterCard from "@/components/common/PosterCard";

const search = async ({ pageParam }: { pageParam: string }) => {
  const response = await fetch(`/api/season/${pageParam}`, {
    method: "get",
  });
  const result = await response.json();
  if (response.ok) {
    return { ...result, data: normalizeAnimationData(result?.data) };
  } else {
    if (result.message === "invalid q") throw new Error(`Results Not Found`);
    else if (result.error === "not_found") throw new Error(`Results Not Found`);
    else throw new Error(result.message);
  }
};

export default function SeasonResults({ query }: { query: string }) {
  const common = useTranslations('common');
  const {
    data,
    error,
    status,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    retry: false,
    staleTime: 1000 * 60 * 10, // 10 minutes
    queryKey: ["animation", "season", query],
    queryFn: search,
    initialPageParam: `/${query}?offset=0`,
    getNextPageParam: ({ paging = {} }) => {
      if (!paging.next) return null;
      return `/${query}?${paging.next.split("?")[1]}`;
    },
  });
  const noResults = (
    <StatusSection>
      <p className="text-sm text-muted-foreground">{common('noResults.season')}</p>
    </StatusSection>
  );
  if (status === "pending") return <PreviewLoadingFallback />;
  if (status === "error")
    return error instanceof Error && error.message === "Results Not Found"
      ? noResults
      : <ErrorFallback e={error} />;
  if (data.pages.every((page) => page.data.length === 0)) return noResults;
  return (
    <>
      <ResultsSection>
        {data.pages.map((page, pageIndex) => (
          <div key={pageIndex} className="grid grid-cols-5 gap-3 px-5">
            {page.data.map((item: AnimationData) => (
              <PosterCard key={item.node.id} poster={item} />
            ))}
          </div>
        ))}
      </ResultsSection>
      <ResultsFooter>
        {hasNextPage ? (
          isFetchingNextPage ? (
            <LoadingIndicator />
          ) : (
            <button
              className="text-xs font-medium text-[#7F77DD] border border-[#7F77DD]/40 rounded-full px-5 py-1.5 hover:bg-[#7F77DD]/10 transition-colors"
              onClick={() => fetchNextPage()}
            >
              {common('next')}
            </button>
          )
        ) : (
          <span className="text-xs text-muted-foreground">{common('lastPage')}</span>
        )}
      </ResultsFooter>
    </>
  );
}
