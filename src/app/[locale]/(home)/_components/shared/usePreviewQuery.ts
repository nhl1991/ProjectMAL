"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchPreview } from "@/lib/fetchPreview";
import { AnimationData } from "@/types/animation";

/** 홈 섹션 공용 프리뷰 조회. path 예: `ranking?value=all&limit=10` */
export function usePreviewQuery(queryKey: readonly unknown[], path: string) {
  const results = useQuery({
    queryKey,
    queryFn: () => fetchPreview(path),
    staleTime: 1000 * 60 * 10, // 10 minutes
    retry: 3,
    refetchOnWindowFocus: false,
  });

  const data: AnimationData[] = results.data?.data ?? [];

  return {
    data,
    isPending: results.isPending,
    isError: results.isError,
    refetch: () => results.refetch(),
  };
}
