"use client";
import Navigation from "@/components/common/Navigation";
import HomeHero from "./_components/HomeHero";
import Top5Section from "./_components/Top5Section";
import RankingTabSection from "./_components/RankingTabSection";
import SeasonTabSection from "./_components/SeasonTabSection";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
// page.tsx (랜딩)
export default function Home() {
  return (

        <QueryClientProvider client={queryClient}>
    <div className="w-full">

      <Navigation />

      {/* 히어로 — 풀스크린 */}
      <HomeHero />

      {/* TOP 5 */}
      <section className="w-full max-w-5xl mx-auto px-6 py-8">
        <Top5Section />
      </section>

      <hr className="border-border mx-6" />

      {/* 랭킹 탭 */}
      <section className="w-full max-w-5xl mx-auto px-6 py-8">
        <RankingTabSection />
      </section>

      <hr className="border-border mx-6" />

      {/* 계절 탭 */}
      <section className="w-full max-w-5xl mx-auto px-6 py-8">
        <SeasonTabSection />
      </section>

      {/* footer — fixed 제거 */}
      <footer className="w-full text-center text-sm py-6 border-t border-border">
        &copy;Data sourced from MyAnimeList
      </footer>

    </div>
        </QueryClientProvider>
  )
}