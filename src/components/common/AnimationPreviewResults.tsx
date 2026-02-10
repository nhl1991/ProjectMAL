"use client";

import { useQueries } from "@tanstack/react-query";
import AnimationCard from "./AnimationCard";
import StatusSection from "./StatusSection";
import PageLoading from "./ui/PageLoading";
import React from "react";
import ResultsSection from "./ResultsSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { AnimationData } from "@/types/animation";
import AnimationPreviewHero from "./AnimationPreviewHero";

const fetchPreview = async (params: string) => {
  const response = await fetch(`/api/preview/${params}`, {
    method: "GET",
  });
  const result = await response.json();
  if (response.ok)
    return result;
  else if(response.status === 404) return {data: []}
  else
    throw new Error(result.error ?? result.message);
};

export default function AnimationPreviewResults({
  category,
  values,
}: {
  category: string;
  values: Array<string>;
}) {
  const results = useQueries({
    queries: values.map((v) => {
      return {
        queryKey: [category, v],
        queryFn: () => fetchPreview(`${category}?value=${v}`),
        retry: 3,
        refetchOnWindowFocus: false,
      };
    }),
  });

  return (
    <ResultsSection>
      {results.map((r, pageIndex) => {
        if (r.isPending)
          return (
            <StatusSection key={pageIndex}>
              <PageLoading />
            </StatusSection>
          );
        if (r.isError)
          return (
            <StatusSection key={pageIndex}>
              <p>{JSON.stringify("cause : " +r.error.cause)}</p>
              <p>{JSON.stringify("message : " + r.error.message)}</p>
              <p>{JSON.stringify("name : " +r.error.name)}</p>
            </StatusSection>
          );
        if (r.isSuccess) {
          const { data } = r.data;
          return (
            <React.Fragment key={pageIndex}>
              <AnimationPreviewHero
                category={category}
                value={values[pageIndex]}
              />
              {data.length > 0 ? (
                <div className="py-4 flex px-4 ">
                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={10}
                    slidesPerView={4}
                    wrapperTag="ul"
                    height={128}
                    navigation
                    preventClicks={false}
                    preventClicksPropagation={false}
                    className="swiper-custom"
                    loop={true}
                    breakpoints={{
                      "768": {
                        slidesPerView: 5,
                        height: 256,
                      },
                    }}
                    scrollbar={{ draggable: true }}
                  >
                    {data.map((item: AnimationData) => {
                      const { id } = item.node;
                      return (
                        <SwiperSlide tag="li" key={id}>
                          {item.ranking ? (
                            <p className="absolute md:text-9xl text-3xl rankTextStroke top-2 left-2 z-20">
                              {item.ranking.rank}
                            </p>
                          ) : null}
                          <AnimationCard item={item} />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              ) : <StatusSection><p>Animation schedules have not been announced yet.</p></StatusSection>}
            </React.Fragment>
          );
        }
      })}
    </ResultsSection>
  );

}
