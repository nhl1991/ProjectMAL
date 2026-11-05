"use client"

import { useOptionStore } from "@/lib/stores";
import { getYears, SEASONTYPE } from "@/lib/variables";
import { ChangeEvent } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";

export default function SeasonType() {
    const { season, year, setSeasonType, setSeasonYear } = useOptionStore();
    const YEARS = getYears();
    const router = useRouter();
    const t = useTranslations('season.types');

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
                {SEASONTYPE.map((s) => (
                    <button
                        key={s}
                        onClick={() => handleSeasonClick(s)}
                        className={`shrink-0 whitespace-nowrap px-3 md:px-4 py-2 text-xs font-medium -mb-px border-b-2 transition-colors ${
                            season === s
                                ? "text-[#7F77DD] border-[#7F77DD]"
                                : "text-muted-foreground border-transparent hover:text-foreground"
                        }`}
                    >
                        {t(s)}
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
