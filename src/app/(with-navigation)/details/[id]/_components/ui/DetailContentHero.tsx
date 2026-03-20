"use client";

import { useEffect, useId, useRef } from "react";

export default function DetailsContentHero({
    children,
}: { children: React.ReactNode; }) {
    const uid = useId();
    const ref = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (!ref.current) return;

                    if (e.isIntersecting) {
                        ref.current.classList.add("border-sky-500");
                        ref.current.classList.remove("border-gray-500");
                        ref.current.classList.remove("text-gray-500");
                    } else {
                        ref.current.classList.remove("border-sky-500");
                        ref.current.classList.add("border-gray-500");
                        ref.current.classList.add("text-gray-500");

                    }
                });
            },
            {
                threshold: 0,
                rootMargin: "-10% 0px -35% 0px",
            }
        );
        if(!ref.current) return;
        
        observer.observe(ref.current as Element);

        return () => {
            observer.disconnect();
        }
    }, [uid])

    return (
        <h2 id={uid} ref={ref} className="w-max font-bold m-0 text-xl pl-2 pr-4 border-l-4 transition-colors duration-500 border-gray-500 text-gray-500">
            {children}
        </h2>
    )
}   