import Navigation from "@/components/PageNavigation";
import RankingNavigation from "@/components/ranking/components/rankingNavigation";


export default function ListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="w-full h-full grid grid-rows-12 grid-cols-1">
      <div className="w-full flex flex-col justify-between row-[1/2] p-2">
        <div className="w-full h-12 flex items-center justify-end"><Navigation /></div>
        <div className="w-full h-12 flex items-center justify-end"><RankingNavigation /></div>
      </div>
      <div className="row-[2/-1] flex flex-col p-2">
        {children}
      </div>

    </div>

  );
}