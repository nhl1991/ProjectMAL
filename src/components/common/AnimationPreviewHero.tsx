"use client"

import { useOptionStore } from "@/lib/stores";
import Link from "next/link";

export default function AnimationPreviewHero({ category, value }: {
    category: string;
    value: string;
}) {
    const { setSeasonType, setRankingType } = useOptionStore()

    const handleOnClick = (type: string) => {
        if (category === 'season') setSeasonType(type);
        else if (category === 'ranking') setRankingType(type);
    }

    return (
        <header className="flex px-4 py-2 gap-x-2">
            <div className="flex items-end bg-sky-300 hover:bg-sky-500 dark:bg-indigo-900 dark:hover:bg-indigo-950 px-3 py-1 rounded-xl text-white">
                <Link href={`${category}/list`}
                    className="flex items-center gap-x-2"
                    onClick={() => {
                        handleOnClick(value)

                    }}>
                    <h1 className="text-2xl font-bold">{value.toUpperCase()}</h1>
                    <svg className="w-6 h-6" data-slot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                    </svg></Link>
            </div>
        </header>
    )
}