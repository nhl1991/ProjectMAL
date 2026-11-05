import Navigation from "@/components/common/Navigation";
import HomeHero from "./_components/HomeHero";
import Top5Section from "./_components/Top5Section";
import RankingTabSection from "./_components/RankingTabSection";
import SeasonTabSection from "./_components/SeasonTabSection";
import QueryProvider from "@/providers/QueryProvider";
import { getTranslations, setRequestLocale } from "next-intl/server";
// page.tsx (랜딩)
export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale;
  setRequestLocale(locale);
  const t = await getTranslations("footer");
  return (
    <div className="w-full">
      <QueryProvider>
        <Navigation />

        {/* 히어로 — 풀스크린 */}
        <HomeHero />

        {/* TOP 5 */}
        <section className="w-full max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-6 py-8">
          <Top5Section />
        </section>

        <hr className="border-border mx-6" />

        {/* 랭킹 탭 */}
        <section className="w-full max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-6 py-8">
          <RankingTabSection />
        </section>

        <hr className="border-border mx-6" />

        {/* 계절 탭 */}
        <section className="w-full max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-6 py-8">
          <SeasonTabSection />
        </section>
      </QueryProvider>
      {/* footer — fixed 제거 */}
      <footer className="w-full text-center text-sm py-6 border-t border-border">
        &copy;{t("copyright")}
      </footer>
    </div>
  );
}
