"use client"

import { useOptionStore } from "@/lib/stores";
import { getYears, SEASON_TYPE } from "@/lib/variables";
import { ChangeEvent, useRef } from "react";

export default function SeasonType() {

    const { season, year, setSeasonType, setSeasonYear } = useOptionStore();
    const seasonRef = useRef<HTMLSelectElement>(null)
    const yearRef = useRef<HTMLSelectElement>(null)
    const YEARS = getYears();
    return (
        <div className="w-full flex gap-x-2 items-center text-xl rounded-xl py-2 px-4 shaodw-lg justify-end">
            <label htmlFor="select-season">SEASON</label>
            <select id="select-season" ref={seasonRef} defaultValue={season} className="w-max px-2 bg-transparent rounded-xl" onChange={(e: ChangeEvent<HTMLSelectElement>) => setSeasonType(e.currentTarget.value)}>
                {
                    SEASON_TYPE.map((s) => <option key={s} value={s}>{s.toUpperCase()}</option>)
                }
            </select>
            <label htmlFor="select-year">YEAR</label>
            <select id="select-year" ref={yearRef} defaultValue={year} className="w-max px-2 bg-transparent rounded-xl" onChange={(e: ChangeEvent<HTMLSelectElement>) => setSeasonYear(e.currentTarget.value)}>
                {
                    YEARS.map((y) => <option key={y} value={y}>{y}</option>)
                }
            </select>
        </div>
    )
}