"use client";
import ResultsSection from "../common/ResultsSection";
import { useQuery } from "@tanstack/react-query";
import RelatedImages from "@/app/(with-navigation)/details/[id]/_components/ui/RelatedImages";
import Recommendations from "@/app/(with-navigation)/details/[id]/_components/ui/Recommendations";
import DetailTopSection from "@/app/(with-navigation)/details/[id]/_components/ui/DetailTopSection";
import Synopsis from "@/app/(with-navigation)/details/[id]/_components/ui/Synopsis";
import PreviewLoadingFallback from "../common/fallbacks/PreviewLoadingFallback";
import ErrorFallback from "../common/fallbacks/ErrorFallback";

const fetchDetails = async (params: string) => {
  const response = await fetch(`/api/details/${params}`, {
    method: "get",
  });
  const result = await response.json();

  if (response.ok) {
    return result;
  } else {
    if (result.error === "not_found")
      throw new Error(`No additional details are available for this anime.`);
    else throw new Error(result.message);
  }
};

export default function DetailsResults({ id }: { id: string }) {
  const { data, error, status } = useQuery({
    queryKey: ["details", id],
    queryFn: () => fetchDetails(id),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    staleTime: 1000 * 60 * 60,
    retry: false,
  });
  if (status === "pending")
    return (
      <PreviewLoadingFallback />
    );
  if (status === "error")
    return (
      <ErrorFallback e={error} />
    );
  if (status === "success")
    return (
      <>
        <ResultsSection>
          <article className="w-full md:max-w-screen-xl flex flex-col items-center">
            <DetailTopSection data={data} />
            <Synopsis synopsis={data.synopsis} />
            {data.pictures.length > 0 ? (
              <RelatedImages pictures={data.pictures} />
            ) : null}

            {data.recommendations.length > 0 ? (
              <Recommendations recommendations={data.recommendations} />
            ) : null}
          </article>
        </ResultsSection>
      </>
    );
}
