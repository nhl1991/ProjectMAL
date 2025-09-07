'use client'
import { useOptionStore } from "@/lib/stores";
import { ranking_type } from "@/lib/variables";
import Link from "next/link";
import { ChangeEvent } from "react";


export default function RankingNavigation() {

    return (
        <div className="w-full flex justify-end md:text-xl text-[9px]">
            <div className="flex justify-center items-center">
                <div>
                    <SelectOptions />
                </div>
                <div className="rounded-2xl bg-sky-500 hover:bg-sky-500/50 py-2 px-2">
                    <Link className="w-full md:h-36 px-4 py-2 text-center " href={`/ranking/list`} replace >GO!</Link>
                </div>
            </div>
        </div>
    )
}


function SelectOptions() {
    const { setRankingType } = useOptionStore();
    const onSelectRankingType = (e: ChangeEvent<HTMLSelectElement>) => {
        setRankingType(e.currentTarget.value);

    }

    return (
        <div className="w-full flex items-center justify-center ">
            <SelectWrapper>
                <label htmlFor="year" className="font-semibold py-2 px-4">RANKING TYPE</label>
                <select id="year" className="bg-transparent rounded-2xl px-4 py-2" onChange={onSelectRankingType}>
                    {
                        ranking_type.map((item, i) => {
                            return <option className="bg-transparent" key={i} value={item}>{item.toUpperCase()}</option>
                        })
                    }
                </select>
            </SelectWrapper>
        </div>
    )
}


function SelectWrapper({ children }: { children: React.ReactNode }) {

    return (
        <div className="px-4 py-2">
            {children}
        </div>
    )
}