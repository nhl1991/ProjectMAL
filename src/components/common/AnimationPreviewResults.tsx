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
    method: "get",
  });
  const result = await response.json();
  if (response.ok) {
    return result;
  } else {
    if (result.message === "invalid q") throw new Error(`No results`);
    else throw new Error(result.message);
  }
};

export default function AnimationPreviewResults({
  category,
  values,
}: {
  category: string;
  values: Array<string>;
}) {
  const { data, isPending, isError } = useQueries({
    queries: values.map((v) => {
      return {
        queryKey: [category, v],
        queryFn: () => fetchPreview(`${category}?value=${v}`),
      };
    }),
    combine: (results) => {
      return {
        data: results.map((r) => r.data),
        isPending: results.some((r) => r.isPending),
        isError: results.some((r) => r.isError),
      };
    },
  });

  if (isPending)
    return (
      <StatusSection>
        <PageLoading />
      </StatusSection>
    );
  if (isError)
    return (
      <StatusSection>
        <p>Something gone wrong...</p>
      </StatusSection>
    );
  return (
    <ResultsSection>
      {data.map((page, pageIndex) => {
        const { data } = page;
        return (
          <React.Fragment key={pageIndex}>
            <AnimationPreviewHero
              category={category}
              value={values[pageIndex]}
            />
            <div className="py-4 flex px-4">
              <Swiper
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={4}
                navigation
                className="swiper-custom"
                loop={true}
                breakpoints={{ "768": { slidesPerView: 5 } }}
                scrollbar={{ draggable: true }}
              >
                {data.map((item: AnimationData) => {
                  const { id } = item.node;
                  return (
                    <SwiperSlide key={id}>
                      <p className="absolute md:text-9xl text-3xl rankTextStroke top-2 left-2 z-20">
                        {item.ranking ? item.ranking.rank : null}
                      </p>
                      <AnimationCard item={item} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </React.Fragment>
        );
      })}
    </ResultsSection>
  );
}
