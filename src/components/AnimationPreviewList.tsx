"use client";
import AnimationNode from "./animationNode";
import { MAL } from "@/lib/types";
import { useId, useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function AnimationPreviewList({ data }: { data: MAL[] }) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const id = useId();

  return (
    <div className="flex w-full">
      <div className="">
        <button
          id={`prev-${id}`}
          ref={prevRef}
          className="scroll-left md:block hidden"
        >
          <svg
            className="md:h-32 hover:opacity-50"
            data-slot="icon"
            fill="none"
            strokeWidth={1.5}
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      </div>
      <div className="w-full h-max overflow-scroll flex relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={100}
          navigation={{
            prevEl: `#prev-${id}`,
            nextEl: `#next-${id}`,
          }}
          loop={true}
          loopAddBlankSlides={false}
          slidesPerView={5}
          slidesPerGroup={5}
          className="min-w-full h-max overflow-hidden flex"
          wrapperTag="ul"
          wrapperClass="h-max grid grid-cols-[repeat(20,min(120px))] grid-rows-[repeat(1,min(180px))] md:grid-cols-[repeat(20,min(240px))] md:grid-rows-[repeat(1,min(360px))] gap-2 md:gap-4 "
        >
          {data.map((item: MAL, i: number) => {
            return (
              <SwiperSlide tag="li" key={i} className="min-w-full h-full ">
                <AnimationNode node={item.node} ranking={item.ranking} priority={i < 5 ? true : false} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div>
        <button id={`next-${id}`} className="scroll-right md:block hidden">
          <svg
            className="md:h-32 hover:opacity-50"
            data-slot="icon"
            fill="none"
            strokeWidth={1.5}
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http:www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
