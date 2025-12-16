"use client";
import HomeNavigation from "./_components/HomeNavigation";
import HomeHero from "./_components/HomeHero";

export default function Home() {

  return (
    <section className="min-h-screen w-full md:max-w-3xl flex items-center justify-center relative">
      <div className="w-full h-[30rem] flex flex-col gap-y-4 items-center justify-center relative">
        <HomeHero />
        <HomeNavigation />
      </div>
    </section>
  );
}
