"use client"

import { useOptionStore } from "@/lib/stores";
import { getYears, SEASON_TYPE } from "@/lib/variables";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";

export default function SeasonType() {
    const { season, year, setSeasonType, setSeasonYear } = useOptionStore();
    const YEARS = getYears();
    const router = useRouter();

    const handleSeasonClick = (s: string) => {
        setSeasonType(s);
        router.replace(`/season/list?season=${s}&year=${year}`, { scroll: false });
    };

    const handleYearChange = (y: string) => {
        setSeasonYear(y);
        router.replace(`/season/list?season=${season}&year=${y}`, { scroll: false });
    };

    return (
        <div className="flex items-center justify-between border-b border-border px-5 mt-3.5">
            <div className="flex">
                {SEASON_TYPE.map((s) => (
                    <button
                        key={s}
                        onClick={() => handleSeasonClick(s)}
                        className={`px-4 py-2 text-xs font-medium -mb-px border-b-2 transition-colors ${
                            season === s
                                ? "text-[#7F77DD] border-[#7F77DD]"
                                : "text-muted-foreground border-transparent hover:text-foreground"
                        }`}
                    >
                        {s.toUpperCase()}
                    </button>
                ))}
            </div>

            <select
                id="select-year"
                value={year}
                className="text-xs bg-transparent border-b border-border py-1 mb-1"
                onChange={(e: ChangeEvent<HTMLSelectElement>) => handleYearChange(e.currentTarget.value)}
            >
                {YEARS.map((y) => (
                    <option key={y} value={y}>{y}</option>
                ))}
            </select>
        </div>
    )
}
