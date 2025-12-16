"use client";
import HomeNavigation from "./_components/HomeNavigation";
import HomeHero from "./_components/HomeHero";
import { useState } from "react";

export default function Home() {
  const [ isComplete, setIsComplete ] = useState<boolean>(false);
  const onLoadComplete = () => setIsComplete(true);

  return (
    <section className="min-h-screen w-full md:max-w-3xl flex items-center justify-center relative">
      <div className="w-full h-[30rem] flex flex-col gap-y-4 items-center justify-center relative">
        <HomeHero onComplete={onLoadComplete} />
        <HomeNavigation />
      </div>
    </section>
  );
}
