'use client'
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import Link from "next/link"
import StarIcon from "@/components/common/icons/StarIcon"
import { getTitle } from "@/lib/utils"
import { AnimationData } from "@/types/animation"

const fetchPreview = async (params: string) => {
  const response = await fetch(`/api/preview/${params}`, {
    method: "GET",
  })
  const result = await response.json()
  if (response.ok) return result
  else if (response.status === 404) return { data: [] }
  else throw new Error(result.error ?? result.message)
}

const RANK_COLORS = ["text-[#FFD700]", "text-[#C0C0C0]", "text-[#CD7F32]"]

export default function Top5Section() {
  const results = useQuery({
    queryKey: ["ranking", "top5", "airing"],
    queryFn: () => fetchPreview(`ranking?value=airing&limit=5`),
    retry: 3,
    refetchOnWindowFocus: false,
  })

  const data: AnimationData[] = results.data?.data ?? []

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-4">지금 방영 중 TOP 5</h2>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
        {data.length > 0
          ? data.map(({ node }, i) => (
              <Link
                key={node.id}
                href={`/details/${node.id}`}
                className="group relative aspect-[2/3] rounded-lg overflow-hidden bg-slate-300 dark:bg-slate-800"
              >
                <Image
                  src={node.main_picture.large}
                  alt={node.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 30vw, 18vw"
                />
                <span
                  className={`absolute -bottom-2 -left-1 text-6xl font-black leading-none [-webkit-text-stroke:2px_black] ${RANK_COLORS[i] ?? "text-white"}`}
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
            ))
          : Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="aspect-[2/3] rounded-lg bg-slate-300 dark:bg-slate-800 animate-pulse" />
            ))}
      </div>
    </div>
  )
}
