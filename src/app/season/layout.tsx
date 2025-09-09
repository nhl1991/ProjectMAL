
import type { Metadata } from "next";
import Navigation from "@/components/PageNavigation";
import SeasonNavigation from "@/components/season/components/SeasonNavigation";

export const metadata: Metadata = {
  title: "Search by season",
};

export default function SeasonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="w-full h-full grid grid-cols-1 grid-rows-12 ">
      <div className="w-full h-full flex flex-col justify-between md:justify-center row-[1/3] p-2 ">
        <div className="w-full h-full flex items-center justify-end "><Navigation /></div>
        <div className="w-full h-full flex items-center justify-end "><SeasonNavigation /></div>

      </div>
      <div className="row-[3/-1]">
        {children}
      </div>
    </div>
  );
}
