"use client"

import DetailsContentWrapper from "@/components/details/ui/DetailsContentWrapper"
import DetailsContentHero from "./DetailContentHero"

export default function Synopsis({ synopsis }: { synopsis: string }) {

    return (<DetailsContentWrapper>
        <DetailsContentHero>SYNOPSIS</DetailsContentHero>
        <div className="flex items-center justify-center">
            <p className="md:max-w-2xl w-full min-h-96 py-6 px-4">{synopsis}</p>
        </div>
    </DetailsContentWrapper>)
}