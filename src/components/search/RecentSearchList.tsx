'use client'
import { useEffect, useState } from "react"
import { X } from "lucide-react"
import { getRecentSearches, removeRecentSearch } from "@/lib/recentSearch"
import { useTranslations } from "next-intl"

export default function RecentSearchList({ onSelect }: { onSelect: (query: string) => void }) {
  const t = useTranslations('search');
  const [recent, setRecent] = useState<string[]>([])

  useEffect(() => {
    setRecent(getRecentSearches())
  }, [])

  if (recent.length === 0) return null

  const handleRemove = (query: string) => {
    setRecent(removeRecentSearch(query))
  }

  return (
    <div className="w-full">
      <h2 className="text-xs font-medium text-muted-foreground mb-2">{t("recent")}</h2>
      <ul className="flex flex-col gap-1">
        {recent.map((query) => (
          <li key={query} className="flex items-center justify-between group">
            <button
              onClick={() => onSelect(query)}
              className="text-sm py-1 text-left hover:text-[#7F77DD] transition-colors"
            >
              {query}
            </button>
            <button
              onClick={() => handleRemove(query)}
              aria-label={`${t("removeRecent", { query }  )}`}
              className="text-muted-foreground hover:text-foreground transition-colors p-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
