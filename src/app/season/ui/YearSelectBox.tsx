'use client'
import { useOptionStore } from "@/app/lib/stores";
import { getYears } from "@/app/lib/variables";
import { useEffect, useRef } from "react";


export default function YearScrollBox() {


    const year = getYears()
    const { setSeasonYear } = useOptionStore()
    //const [visibleItem, setVisibleItem] = useState<string | null>(null);
    const scrollBoxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.target.textContent) {
                        //setVisibleItem(entry.target.textContent || null);
                        setSeasonYear(entry.target.textContent);
                    }
                });
            },
            {
                root: scrollBoxRef.current,
                threshold: 0.5, // 50%가 보여질 때 트리거
            }
        );

        // 모든 항목에 Observer 추가
        const items = scrollBoxRef.current?.querySelectorAll(".scroll-item");
        items?.forEach((item) => observer.observe(item));

        return () => observer.disconnect();
    });


    return (
        <>
            <div id="scrollbox" ref={scrollBoxRef} className="scroll-box md:w-max w-full" >
            <div className="place-holder">YEAR</div>
                {
                    year.map((item, i) => {
                        return <div key={i} className="scroll-item">{item}</div>
                    })
                }
            </div>
        </>
    )
}