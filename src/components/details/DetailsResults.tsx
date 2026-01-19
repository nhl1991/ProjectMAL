"use client";
import StatusSection from "../common/StatusSection";
import PageLoading from "../common/ui/PageLoading";
import ResultsSection from "../common/ResultsSection";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import RelatedImages from "@/app/(with-navigation)/details/[id]/_components/ui/RelatedImages";
import Recommendations from "@/app/(with-navigation)/details/[id]/_components/ui/Recommendations";
import Genres from "@/app/(with-navigation)/details/[id]/_components/ui/Genres";
import DetailHero from "@/app/(with-navigation)/details/[id]/_components/ui/DetailHero";
import PosterImage from "@/app/(with-navigation)/details/[id]/_components/ui/PosterImage";
import Rating from "@/app/(with-navigation)/details/[id]/_components/ui/Rating";
import Synopsis from "@/app/(with-navigation)/details/[id]/_components/ui/Synopsis";

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
  const router = useRouter();
  if (status === "pending")
    return (
      <StatusSection>
        <PageLoading />
      </StatusSection>
    );
  if (status === "error")
    return (
      <StatusSection>
        <p className="py-24 text-2xl">{error.message}</p>
        <button className="btn-hover" onClick={() => router.back()}>
          BACK
        </button>
      </StatusSection>
    );
  if (status === "success")
    return (
      <>
        <ResultsSection>
          <article className="w-full md:max-w-screen-xl flex flex-col gap-y-2 items-center">
            <DetailHero
              title={data.title}
              alternative_titles={data.alternative_titles}
            />
            <Rating mean={data.mean} />
            <PosterImage title={data.title} main_picture={data.main_picture}/>
            <Genres genres={data.genres} />
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
