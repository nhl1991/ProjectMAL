"use client";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { getCurrentSeason } from "@/lib/variables";
import { useTranslations } from "next-intl";
import { usePreviewQuery } from "./shared/usePreviewQuery";

export default function HomeHero() {
  const { data: posters } = usePreviewQuery(
    ["ranking", "hero", "all"],
    "ranking?value=all&limit=5",
  );

  const t = useTranslations("home.hero");
  return (
    <section className="w-full relative overflow-hidden">
      {/* 다크 배경 */}
      <div className="absolute inset-0 bg-[#08081a]" />

      {/* 글로우 효과 */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 15% 60%, rgba(127,119,221,0.18) 0%, transparent 55%),
            radial-gradient(ellipse at 75% 30%, rgba(29,158,117,0.08) 0%, transparent 45%)
          `,
        }}
      />

      {/* 모바일용 페이드 */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background: `linear-gradient(to top, #08081a 30%, transparent 100%)`,
        }}
      />

      {/* 배경 이미지 (모바일) */}
      <Image
        src="/lp-background.jpg"
        alt=""
        fill
        className="object-cover opacity-20 md:hidden"
        priority
        sizes="100vw"
        quality={50}
      />

      {/* 텍스트·포스터는 아래 섹션과 같은 폭의 컨테이너에 배치 (배경만 전체 폭) */}
      <div className="relative w-full max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-6 min-h-[420px] flex items-end">
        {/* 우측 포스터들 */}
        <div className="absolute right-6 top-0 bottom-0 w-1/2 hidden md:flex gap-1.5 py-4">
          {posters.length > 0
            ? posters.map(({ node }, i) => (
              <div
                key={i}
                className="flex-1 rounded-lg overflow-hidden opacity-65 relative"
              >
                <Image
                  src={node.main_picture.large}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="10vw"
                />
              </div>
            ))
            : Array.from({ length: 5 }).map((_, i) => (
              // 포스터 없을 때 스켈레톤
              <div
                key={i}
                className="flex-1 rounded-lg bg-white/10 animate-pulse"
              />
            ))}
        </div>

        {/* 좌→우, 하→상 페이드 + 포스터 오른쪽 끝 페이드 */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background: `
            linear-gradient(to right, #08081a 28%, transparent 65%),
            linear-gradient(to left, #08081a 0%, transparent 12%),
            linear-gradient(to top, #08081a 0%, transparent 35%)
          `,
          }}
        />

        {/* 콘텐츠 */}
        <div className="relative z-10 pb-10 md:pb-14 max-w-lg">
          <div className="inline-flex items-center gap-1.5 bg-[rgba(127,119,221,0.18)] border border-[rgba(127,119,221,0.35)] rounded-full px-3 py-1 text-[11px] text-[#AFA9EC] mb-4 tracking-wide">
            ✦ Powered by MyAnimeList
          </div>

          <h1 className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-tight tracking-tight mb-3">
            {t.rich("title", {
              br: () => <br />,
              accent: (chunks) => (
                <span className="text-[#7F77DD]">{chunks}</span>
              ),
            })}
          </h1>

          <p className="text-sm text-white/45 mb-6 leading-relaxed">
            {t.rich("subtitle", {
              br: () => <br />,
            })}
          </p>

          <div className="flex gap-2">
            <Link
              href="/ranking/list?ranking_type=all"
              className="bg-[#7F77DD] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#6d65c9] transition-colors"
            >
              {t("ranking")}
            </Link>
            <Link
              href={`/season/list?season=${getCurrentSeason()}`}
              className="bg-white/8 text-white/75 border border-white/20 text-sm px-5 py-2.5 rounded-lg hover:bg-white/15 transition-colors"
            >
              {t("season")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
