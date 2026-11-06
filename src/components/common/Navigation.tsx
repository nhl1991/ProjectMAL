'use client'
import { Link, usePathname } from "@/i18n/navigation";
import { getCurrentSeason } from "@/lib/variables"
import { useTranslations } from "next-intl";
import { ModeToggle } from "@/components/ThemeToggle";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";

export default function Navigation() {
  // 언어 경로(/en, /ja)를 제외한 경로라서 locale과 관계없이 활성 메뉴를 판별할 수 있음
  const pathname = usePathname()
  const t = useTranslations('nav')

  const ROUTES = [
    { href: "/search", match: "/search", label: t("search") },
    { href: "/ranking?ranking_type=all", match: "/ranking", label: t("ranking") },
    { href: `/season?season=${getCurrentSeason()}`, match: "/season", label: t("season") },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between gap-2">
        <Link href="/" className="text-gradient text-sm md:text-lg font-bold shrink-0">
          Nanimiru
        </Link>
        <div className="flex items-center gap-1 md:gap-4">
          <ul className="flex gap-x-0.5 md:gap-x-6">
            {ROUTES.map((r) => {
              const active = pathname === r.match || pathname?.startsWith(`${r.match}/`)
              return (
                <li key={r.match}>
                  <Link
                    href={r.href}
                    className={`app-link text-sm px-2 md:px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                      active ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {r.label}
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className="flex items-center gap-1">
            <LocaleSwitcher />
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}
