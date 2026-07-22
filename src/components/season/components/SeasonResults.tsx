"use client";

import Image from "next/image";
import Link from "next/link";
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

const search = async ({ pageParam }: { pageParam: string }) => {
  const response = await fetch(`/api/season/${pageParam}`, {
    method: "get",
  });
  const result = await response.json();
  if (response.ok) {
    return result;
  } else {
    if (result.message === "invalid q") throw new Error(`Results Not Found`);
    else if (result.error === "not_found") throw new Error(`Results Not Found`);
    else throw new Error(result.message);
  }
};

export default function SeasonResults({ query }: { query: string }) {
  const {
    data,
    error,
    status,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    retry: false,
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
      <p className="text-sm text-muted-foreground">해당 시즌에 등록된 애니메이션이 없습니다.</p>
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
              <Link
                key={item.node.id}
                href={`/details/${item.node.id}`}
                className="group relative aspect-[2/3] rounded-lg overflow-hidden bg-slate-300 dark:bg-slate-800"
              >
                <Image
                  src={item.node.main_picture.large}
                  alt={item.node.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 20vw, 12vw"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1 px-2 text-center">
                  <p className="text-white text-sm font-bold">{getTitle(item.node)}</p>
                  <div className="flex items-center gap-x-1">
                    <StarIcon className="w-4 h-4" />
                    <p className="text-white text-xs" aria-label="user rating">{item.node.mean ?? 0}</p>
                  </div>
                </div>
              </Link>
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
              NEXT
            </button>
          )
        ) : (
          <span className="text-xs text-muted-foreground">LASTPAGE</span>
        )}
      </ResultsFooter>
    </>
  );
}
