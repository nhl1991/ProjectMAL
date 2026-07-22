'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { getCurrentSeason } from "@/lib/variables"

export default function Navigation() {
  const pathname = usePathname()

  const ROUTES = [
    { href: "/search", match: "/search", label: "SEARCH" },
    { href: "/ranking/list?ranking_type=all", match: "/ranking", label: "RANKING" },
    { href: `/season/list?season=${getCurrentSeason()}`, match: "/season", label: "SEASON" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-gradient text-lg font-bold">
          Project-MAL
        </Link>
        <ul className="flex gap-x-6">
          {ROUTES.map((r) => {
            const active = pathname === r.match || pathname?.startsWith(`${r.match}/`)
            return (
              <li key={r.match}>
                <Link
                  href={r.href}
                  className={`app-link text-sm px-3 py-1.5 rounded-lg transition-colors ${
                    active ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {r.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
