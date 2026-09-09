'use client'
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import StarIcon from "@/components/common/icons/StarIcon"
import { getTitle } from "@/lib/utils"
import { fetchPreview } from "@/lib/fetchPreview"
import { AnimationData } from "@/types/animation"

import "swiper/css"

const RANK_COLORS = ["text-[#FFD700]", "text-[#C0C0C0]", "text-[#CD7F32]"]

export default function Top5Section() {
  const results = useQuery({
    queryKey: ["ranking", "top5", "airing"],
    queryFn: () => fetchPreview(`ranking?value=airing&limit=50`),
    staleTime: 1000 * 60 * 10, // 10 minutes
    retry: 3,
    refetchOnWindowFocus: false,
  })

  const currentYear = new Date().getFullYear().toString()
  const data: AnimationData[] = (results.data?.data ?? [])
    .filter(({ node }) => node.media_type === "tv" && node.start_date?.startsWith(currentYear))
    .slice(0, 5)

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-4">지금 방영 중 TOP 5</h2>
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
          grabCursor
          breakpoints={{ 768: { slidesPerView: 5 } }}
          className="!h-auto"
        >
          {data.map(({ node }, i) => (
            <SwiperSlide key={node.id} className="!h-auto">
              <Link
                href={`/details/${node.id}`}
                className="group relative aspect-[2/3] rounded-lg overflow-hidden bg-slate-300 dark:bg-slate-800 block"
              >
                <Image
                  src={node.main_picture.large}
                  alt={node.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 30vw, 18vw"
                />
                <span
                  className={`absolute -bottom-2 -left-1 text-6xl font-black leading-none [-webkit-text-stroke:1px_black] ${RANK_COLORS[i] ?? "text-white"} opacity-60`}
                >
                  {i + 1}
                </span>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1 px-2 text-center">
                  <p className="text-white text-sm font-bold">{getTitle(node)}</p>
                  <div className="flex items-center gap-x-1">
                    <StarIcon className="w-4 h-4" />
                    <p className="text-white text-xs" aria-label="user rating">{node.mean ?? 0}</p>
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
