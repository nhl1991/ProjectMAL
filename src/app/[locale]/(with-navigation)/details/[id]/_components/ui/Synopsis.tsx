"use client"

import { useState } from "react"
import DetailsContentWrapper from "@/components/details/ui/DetailsContentWrapper"
import DetailsContentHero from "./DetailContentHero"
import { useTranslations } from "next-intl";

export default function Synopsis({ synopsis }: { synopsis: string }) {
    const t = useTranslations('detail')
    const [expanded, setExpanded] = useState(false)

    return (<DetailsContentWrapper>
        <DetailsContentHero>{t('synopsis')}</DetailsContentHero>
        <p className={`text-sm leading-relaxed ${expanded ? "" : "line-clamp-3"}`}>{synopsis}</p>
        <button onClick={() => setExpanded((p) => !p)} className="text-xs text-[#7F77DD] mt-1.5">
            {expanded ? t('collapse') : t('expand')}
        </button>
    </DetailsContentWrapper>)
}
