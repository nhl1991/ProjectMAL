'use client'
import { useOptionStore } from "@/app/lib/stores";
import { getYears } from "@/app/lib/variables";
import { ChangeEvent, useEffect, useRef } from "react";


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
                threshold: 0.7, // 50%가 보여질 때 트리거
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
    //             {/* <div className="placeholder bg-blue-700 h-[calc(9rem+2px)] ">YEAR</div> */}
    //             {
    //                 year.map((item, i) => {
    //                     return <div key={i} className="scroll-item w-full h-full ">{item}</div>
    //                 })
    //             }
    //         </div>
    //     </>
    // )

    const onSelectYear = (e:ChangeEvent<HTMLSelectElement>) => {
        setSeasonYear(e.currentTarget.value);

    }
    return(
        <>
        <label htmlFor="year">Select Year</label>
            <select id="year" className="text-4xl bg-transparent" onChange={onSelectYear}>
                {
                    year.map((item, i) => {
                        return <option className="bg-transparent" key={i} value={item}>{item}</option>
                    })
                }
            </select>
        </>
    )

}