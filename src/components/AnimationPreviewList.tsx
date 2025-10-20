"use client";
import AnimationNode from "./animationNode";
import { MAL } from "@/lib/types";
import { useId, useRef } from "react";
import { Grid, Navigation, } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';
export default function AnimationPreviewList({ data }: { data: MAL[] }) {
    const prevRef = useRef<HTMLButtonElement>(null);
    const id = useId();

    return (
        <div className="flex w-full h-72">
            <div className="flex items-center justify-center">
                <button
                    id={`prev-${id}`}
                    ref={prevRef}
                    className="scroll-left md:block hidden"
                    role="button-left"
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
                <Swiper
                    
                    navigation={{
                        prevEl: `#prev-${id}`,
                        nextEl: `#next-${id}`,
                    }}
                    breakpoints={{
                        768: {
                            spaceBetween: 20,
                            slidesPerView: 5
                        },
                        
                    }}
                    slidesPerView={4}
                    loop={true}
                    className="w-full h-full overflow-scroll flex relative p-2 "
                    modules={[Navigation, Grid]}
                >
                    {data.map((item: MAL, i: number) => {
                        return <SwiperSlide key={i} className="aspect-[9/16] min-w-48 relative" tag="article">
                                <AnimationNode node={item.node} ranking={item.ranking} priority={i < 5 ? true:false} />
                        </SwiperSlide>

                    })}
                </Swiper>
            <div className="flex items-center justify-center">
                <button id={`next-${id}`} className="scroll-right md:block hidden" role="button-right">
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


