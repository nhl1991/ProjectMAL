'use client'
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import Link from "next/link"
import { AnimationData } from "@/types/animation"

const fetchPreview = async (params: string) => {
  const response = await fetch(`/api/preview/${params}`, {
    method: "GET",
  });
  const result = await response.json();
  if (response.ok) return result;
  else if (response.status === 404) return { data: [] };
  else throw new Error(result.error ?? result.message);
};

export default function HomeHero() {

    const results = useQuery({
        queryKey: ["ranking", "hero", "all"],
        queryFn: () => fetchPreview(`ranking?value=all&limit=5`),
        retry: 3,
        refetchOnWindowFocus: false,
  });

  return (
    <section className="w-full min-h-[420px] relative flex items-end overflow-hidden">

      {/* 다크 배경 */}
      <div className="absolute inset-0 bg-[#08081a]" />

      {/* 글로우 효과 */}
      <div className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 15% 60%, rgba(127,119,221,0.18) 0%, transparent 55%),
            radial-gradient(ellipse at 75% 30%, rgba(29,158,117,0.08) 0%, transparent 45%)
          `
        }}
      />

      {/* 우측 포스터들 */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden md:flex gap-1.5 p-4">
        {results.data?.data.length > 0
          ? results.data?.data.map(({ node }: AnimationData, i: number) => (
              <div key={i} className="flex-1 rounded-lg overflow-hidden opacity-65 relative">
                <Image src={node.main_picture.large} alt="" fill className="object-cover" sizes="10vw" />
              </div>
            ))
          : Array.from({ length: 5 }).map((_, i) => (
              // 포스터 없을 때 스켈레톤
              <div key={i} className="flex-1 rounded-lg bg-white/10 animate-pulse" />
            ))
        }
      </div>

      {/* 좌→우, 하→상 페이드 */}
      <div className="absolute inset-0 hidden md:block"
        style={{
          background: `
            linear-gradient(to right, #08081a 28%, transparent 65%),
            linear-gradient(to top, #08081a 0%, transparent 35%)
          `
        }}
      />
      {/* 모바일용 페이드 */}
      <div className="absolute inset-0 md:hidden"
        style={{ background: `linear-gradient(to top, #08081a 30%, transparent 100%)` }}
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

      {/* 콘텐츠 */}
      <div className="relative z-10 px-8 pb-10 md:pb-14 max-w-lg">
        <div className="inline-flex items-center gap-1.5 bg-[rgba(127,119,221,0.18)] border border-[rgba(127,119,221,0.35)] rounded-full px-3 py-1 text-[11px] text-[#AFA9EC] mb-4 tracking-wide">
          ✦ Powered by MyAnimeList
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-3">
          Discover<br />
          <span className="text-[#7F77DD]">New Anime</span>
        </h1>

        <p className="text-sm text-white/45 mb-6 leading-relaxed">
          랭킹, 시즌별 신작, 검색까지<br />
          애니메이션 정보를 한곳에서
        </p>

        <div className="flex gap-2">
          <Link
            href="/ranking"
            className="bg-[#7F77DD] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#6d65c9] transition-colors"
          >
            랭킹 보기
          </Link>
          <Link
            href="/season"
            className="bg-white/8 text-white/75 border border-white/20 text-sm px-5 py-2.5 rounded-lg hover:bg-white/15 transition-colors"
          >
            이번 시즌 →
          </Link>
        </div>
      </div>

    </section>
  )
}