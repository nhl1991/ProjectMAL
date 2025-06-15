'use client'
import { useOptionStore } from "@/app/lib/stores";
import { getYears } from "@/app/lib/variables";
import { ChangeEvent, useEffect, useRef } from "react";


export default function SelectOptions() {
    const year = getYears();
    const season = ['winter', 'spring', 'summer', 'fall'];
    const { setSeasonYear, setSeasonType } = useOptionStore();


    const onSelectYear = (e: ChangeEvent<HTMLSelectElement>) => {
        setSeasonYear(e.currentTarget.value);

    }

    const onSelectSeason = (e: ChangeEvent<HTMLSelectElement>) => {
        setSeasonType(e.currentTarget.value);

    }

    return (
        <div className="w-full h-full flex items-center justify-center">
            <SelectWrapper>
                <label htmlFor="year" className="block text-xl font-semibold py-2">Year</label>
                <select id="year" className="text-4xl bg-transparent rounded-2xl px-4 py-2" onChange={onSelectYear}>
                    {
                        year.map((item, i) => {
                            return <option className="bg-transparent" key={i} value={item}>{item}</option>
                        })
                    }
                </select>
            </SelectWrapper>
            <SelectWrapper>
                <label htmlFor="season" className="block text-xl font-semibold py-2">Season</label>
                <select id="season" className="text-4xl bg-transparent rounded-2xl px-4 py-2" onChange={onSelectSeason}>
                    {
                        season.map((item, i) => {
                            return <option key={i} value={item}>{item.toUpperCase()}</option>
                        })
                    }
                </select>
            </SelectWrapper>
        </div>
    )
}


function SelectWrapper({children}: {children:React.ReactNode}){

    return(
        <div className="px-4 py-2">
            {children}
        </div>
    )
}