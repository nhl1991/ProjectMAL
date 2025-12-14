"use client"

import { useOptionStore } from "@/lib/stores";
import { ChangeEvent } from "react";

export default function RankingType() {

    const RANKING_TYPE = ["all", "airing", "upcoming", "tv", "ova", "movie", "special", "bypopularity", "favorite"]
    const { rankingType, setRankingType } = useOptionStore();
    return (
        <div className="w-full flex gap-x-2 items-center text-xl rounded-xl py-2 px-4 shaodw-lg justify-end">
            <label htmlFor="select-type">RANKING</label>
            <select id="select-type" defaultValue={rankingType} className="w-max px-2 bg-transparent rounded-xl" onChange={(e: ChangeEvent<HTMLSelectElement>) => setRankingType(e.currentTarget.value)}>
                {
                    RANKING_TYPE.map((item) => <option key={item} value={item}>{item.toUpperCase()}</option>)
                }
            </select>
            <hr />
        </div>
    )
}