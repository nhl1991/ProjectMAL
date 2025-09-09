'use client'
import { useOptionStore } from "@/lib/stores";
import { getYears } from "@/lib/variables";
import { ChangeEvent } from "react";


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
        <div className="w-full flex items-center justify-center ">
            <SelectWrapper>
                <label htmlFor="year" className="font-semibold py-2 px-4">Year</label>
                <select id="year" className="bg-transparent rounded-2xl px-4 py-2" onChange={onSelectYear}>
                    {
                        year.map((item, i) => {
                            return <option key={i} value={item} className="bg-transparent text-black" >{item}</option>
                        })
                    }
                </select>
            </SelectWrapper>
            <SelectWrapper>
                <label htmlFor="season" className="font-semibold py-2 px-4">Season</label>
                <select id="season" className="bg-transparent rounded-2xl px-4 py-2" onChange={onSelectSeason}>
                    {
                        season.map((item, i) => {
                            return <option key={i} value={item} className="bg-transparent text-black">{item.toUpperCase()}</option>
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