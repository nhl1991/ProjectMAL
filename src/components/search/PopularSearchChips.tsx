'use client'
import { useQuery } from "@tanstack/react-query"
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

export default function PopularSearchChips({ onSelect }: { onSelect: (query: string) => void }) {
  const results = useQuery({
    queryKey: ["ranking-preview", "all"],
    queryFn: () => fetchPreview(`ranking?value=all&limit=10`),
    retry: 3,
    refetchOnWindowFocus: false,
  })

  const data: AnimationData[] = results.data?.data ?? []
  if (data.length === 0) return null

  return (
    <div className="w-full">
      <h2 className="text-xs font-medium text-muted-foreground mb-2">인기 검색어</h2>
      <div className="flex flex-wrap gap-2">
        {data.map(({ node }) => (
          <button
            key={node.id}
            onClick={() => onSelect(getTitle(node))}
            className="text-xs px-3 py-1.5 rounded-full border border-border hover:border-[#7F77DD] hover:text-[#7F77DD] transition-colors"
          >
            {getTitle(node)}
          </button>
        ))}
      </div>
    </div>
  )
}
