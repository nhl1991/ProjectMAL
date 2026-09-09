'use client'
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import StarIcon from "@/components/common/icons/StarIcon"
import { getTitle } from "@/lib/utils"
import { AnimationData } from "@/types/animation"
import { SEASON_TYPE, getCurrentSeason } from "@/lib/variables"

import "swiper/css"

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
    queryFn: () => fetchPreview(`season?value=${season}&limit=10`),
    staleTime: 1000 * 60 * 60, // 1 hour
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

      {results.isError ? (
        <div className="flex flex-col items-center justify-center gap-2 py-8 text-center">
          <p className="text-sm text-muted-foreground">정보를 불러오지 못했습니다.</p>
          <button onClick={() => results.refetch()} className="text-xs text-[#7F77DD] hover:underline">
            다시 시도
          </button>
        </div>
      ) : results.isPending ? (
        <div className="flex gap-3 overflow-hidden">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="w-1/3 md:w-1/5 flex-shrink-0 aspect-[2/3] rounded-lg bg-slate-300 dark:bg-slate-800 animate-pulse" />
          ))}
        </div>
      ) : (
        <Swiper
          spaceBetween={12}
          slidesPerView={3}
          loop={data.length >= 6}
          grabCursor
          breakpoints={{ 768: { slidesPerView: 5 } }}
          className="!h-auto"
        >
          {data.map((item) => (
            <SwiperSlide key={item.node.id} className="!h-auto">
              <Link
                href={`/details/${item.node.id}`}
                className="group relative aspect-[2/3] rounded-lg overflow-hidden bg-slate-300 dark:bg-slate-800 block"
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
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  )
}
