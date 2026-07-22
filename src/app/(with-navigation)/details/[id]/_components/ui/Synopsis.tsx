"use client"

import { useState } from "react"
import DetailsContentWrapper from "@/components/details/ui/DetailsContentWrapper"
import DetailsContentHero from "./DetailContentHero"

export default function Synopsis({ synopsis }: { synopsis: string }) {
    const [expanded, setExpanded] = useState(false)

    return (<DetailsContentWrapper>
        <DetailsContentHero>Synopsis</DetailsContentHero>
        <p className={`text-sm leading-relaxed ${expanded ? "" : "line-clamp-3"}`}>{synopsis}</p>
        <button onClick={() => setExpanded((p) => !p)} className="text-xs text-[#7F77DD] mt-1.5">
            {expanded ? "접기" : "더 보기"}
        </button>
    </DetailsContentWrapper>)
}
