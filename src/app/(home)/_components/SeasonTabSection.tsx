'use client'
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import StarIcon from "@/components/common/icons/StarIcon"
import { getTitle } from "@/lib/utils"
import { AnimationData } from "@/types/animation"
import { SEASON_TYPE, getCurrentSeason } from "@/lib/variables"

const fetchPreview = async (params: string) => {
  const response = await fetch(`/api/preview/${params}`, {
    method: "GET",
  })
  const result = await response.json()
  if (response.ok) return result
  else if (response.status === 404) return { data: [] }
  else throw new Error(result.error ?? result.message)
}

type SeasonTab = (typeof SEASON_TYPE)[number]

export default function SeasonTabSection() {
  const [season, setSeason] = useState<SeasonTab>(getCurrentSeason())

  const results = useQuery({
    queryKey: ["season-preview", season],
    queryFn: () => fetchPreview(`season?value=${season}&limit=5`),
    retry: 3,
    refetchOnWindowFocus: false,
  })

  const data: AnimationData[] = results.data?.data ?? []

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">이번 시즌 신작</h2>
        <Link href={`/season/list?season=${season}`} className="text-sm text-muted-foreground hover:underline">
          전체 보기 →
        </Link>
      </div>

      <div className="flex gap-2 mb-4">
        {SEASON_TYPE.map((tab) => (
          <button
            key={tab}
            onClick={() => setSeason(tab)}
            className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
              season === tab
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border hover:bg-accent"
            }`}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-5 gap-3">
        {results.isPending
          ? Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="aspect-[2/3] rounded-lg bg-slate-300 dark:bg-slate-800 animate-pulse" />
            ))
          : data.map((item) => (
              <Link
                key={item.node.id}
                href={`/details/${item.node.id}`}
                className="group relative aspect-[2/3] rounded-lg overflow-hidden bg-slate-300 dark:bg-slate-800"
              >
                <Image
                  src={item.node.main_picture.large}
                  alt={item.node.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 20vw, 12vw"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1 px-2 text-center">
                  <p className="text-white text-xs font-semibold">{getTitle(item.node)}</p>
                  <div className="flex items-center gap-x-1">
                    <StarIcon className="w-3.5 h-3.5" />
                    <p className="text-white text-xs" aria-label="user rating">{item.node.mean ?? 0}</p>
                  </div>
                </div>
              </Link>
            ))}
      </div>
    </div>
  )
}
