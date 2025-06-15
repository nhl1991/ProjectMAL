'use client'
import { useOptionStore } from "@/app/lib/stores";
import { ChangeEvent, useEffect, useRef } from "react";


export default function SeasonScrollBox() {
    const season = ['winter', 'spring', 'summer', 'fall'];
    //const [visibleItem, setVisibleItem] = useState<string | null>(null);
    const scrollBoxRef = useRef<HTMLDivElement>(null);
    const { setSeasonType } = useOptionStore();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.target.textContent) {
                            setSeasonType(entry.target.textContent);
                            (entry.target as HTMLElement).scrollIntoView({
                            behavior: 'smooth',
                            block: 'center', // or 'nearest', 'start'
                            inline: 'nearest',
                        });
                    }
                });
            },
            {
                root: scrollBoxRef.current,
                threshold: 0.3, // 50%가 보여질 때 트리거
            }
        );

        // 모든 항목에 Observer 추가
        const items = scrollBoxRef.current?.querySelectorAll(".scroll-item");
        items?.forEach((item) => observer.observe(item));

        return () => observer.disconnect();
    });


    // return (
    //     <>
    //         <div id="scrollbox" ref={scrollBoxRef} className="scroll-box w-full h-36 scroll-smooth flex flex-col items-center" >
    //             {
    //                 season.map((item, i) => {
    //                     return <div key={i} className="scroll-item">{item.toUpperCase()}</div>
    //                 })
    //             }
    //         </div>
    //     </>
    // )

    const onSelectSeason = (e:ChangeEvent<HTMLSelectElement>) => {
            setSeasonType(e.currentTarget.value);
    
        }
        return(
            <>
                <select className="text-4xl bg-transparent" onChange={onSelectSeason}>
                    {
                        season.map((item, i) => {
                            return <option key={i} value={item}>{item.toUpperCase()}</option>
                        })
                    }
                </select>
            </>
        )
}