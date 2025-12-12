"use client";

import { AnimationData } from "@/types/animation";
import { useInfiniteQuery } from "@tanstack/react-query";
import AnimationCard from "../common/AnimationCard";
import Loading from "../common/ui/Loading";
import { useEffect } from "react";

const search = async ({ pageParam }: { pageParam: string }) => {
  console.log(pageParam);
  const response = await fetch(`/api/get-anime${pageParam}`, {
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

export default function AnimeSearchResults({ query }: { query: string }) {
  if (query === "") return;
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
    initialPageParam: `?q=${query}&limit=16`,
    getNextPageParam: ({ paging }) => `?${paging.next.split("?")[1]}`,
  });
  if (status === "pending") return <Loading />;
  if (status === "error") return <p className="py-24">{error.message}</p>;
  if (status === "success")
    if (!data) return <p>No data. Try something else</p>;
  return (
    <>
      {data.pages.map((page, pageIndex) => {
        return (
          <div
            className="w-full md:max-w-screen-xl grid grid-rows-4 grid-cols-[repeat(4,minmax(90px,192px))] gap-2 py-1 px-4 justify-center"
            key={pageIndex}
          >
            {page.data.map((item: AnimationData, idx: number) => {
                const { id } = item.node;
              return <AnimationCard key={id} item={item} />;
            })}
          </div>
        );
      })}
      <footer className="py-4">
        {hasNextPage ? (
          isFetchingNextPage ? (
            <Loading />
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
