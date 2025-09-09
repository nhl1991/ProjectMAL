import Navigation from "@/components/PageNavigation";
import RankingNavigation from "@/components/ranking/components/rankingNavigation";


export default function ListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="w-full h-full grid grid-cols-1 grid-rows-12 ">
      <div className="w-full h-full flex flex-col justify-between md:justify-center row-[1/3] p-2 ">
        <div className="w-full flex items-center justify-end "><Navigation /></div>
        <div className="w-full flex items-center justify-end "><RankingNavigation /></div>
      </div>
      <div className="row-[3/-1] flex flex-col p-2 ">
        {children}
      </div>

    </div>

  );
}