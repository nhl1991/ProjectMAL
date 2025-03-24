'use client'
import { useOptionStore } from "@/app/lib/stores";
import { useEffect, useRef } from "react";


export default function SeasonScrollBox() {
    const season = ['winter', 'spring', 'summer', 'autumn'];
    //const [visibleItem, setVisibleItem] = useState<string | null>(null);
    const scrollBoxRef = useRef<HTMLDivElement>(null);
    const { setSeasonType } = useOptionStore();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.target.textContent) {
                            setSeasonType(entry.target.textContent);
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
            <div id="scrollbox" ref={scrollBoxRef} className="scroll-box lg:w-1/3 w-full" >
            <div className="place-holder">SEASON</div>
                {
                    season.map((item, i) => {
                        return <div key={i} className="scroll-item">{item.toUpperCase()}</div>
                    })
                }
            </div>
        </>
    )
}