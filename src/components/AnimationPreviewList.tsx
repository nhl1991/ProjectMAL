'use client';
import AnimationNode from "./animationNode";
import { MAL } from "@/lib/types";
import { MouseEvent, useRef, useState } from "react";

export default function AnimationPreviewList({ data }: { data: MAL[] }) {
    const [isLeftHover, setIsLeftHover] = useState<boolean>(false);

    const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
        if (!containerRef || !containerRef.current) return;

        if (e.currentTarget.name === 'scroll-left') {
            containerRef.current.scrollBy({
                behavior: 'smooth',
                left: -320
            })
        } else if (e.currentTarget.name === 'scroll-right') {
            containerRef.current.scrollBy({
                behavior: 'smooth',
                left: +320
            })
        } else return;

    }

    const containerRef = useRef<HTMLDivElement>(null);


    return (
        <div className="flex w-full">
            <button name="scroll-left" className="md:block hidden" onClick={handleOnClick} onMouseEnter={()=>setIsLeftHover(true)} onMouseLeave={()=>setIsLeftHover(false)}>
                <svg className="md:h-32 hover:opacity-50" data-slot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </button>
            <div ref={containerRef} className="w-full h-max overflow-scroll flex">
                <div className="grid grid-cols-[repeat(10,min(120px))] grid-rows-[repeat(1,min(180px))] md:grid-cols-[repeat(10,min(240px))] md:grid-rows-[repeat(1,min(360px))] gap-2 md:gap-4 p-4 ">
                    {data.map((item: MAL, i: number) => {
                        return (
                            <ul key={i} className="flex-none w-full h-full ">
                                <AnimationNode node={item.node} ranking={item.ranking} />
                            </ul>
                        );
                    })}
                </div>
            </div>
            <button name="scroll-right" className="md:block hidden" onClick={handleOnClick}>
                <svg className="md:h-32 hover:opacity-50" data-slot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>
    )
}