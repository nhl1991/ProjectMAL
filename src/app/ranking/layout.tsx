import RankingNavigation from "./ui/rankingNavigation";


export default function ListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="w-full h-full grid grid-rows-12">
      <div className="w-full row-end-2 flex items-center justify-center outline-2 outline-black px-2 my-4 overflow-scroll">
        <RankingNavigation />
      </div>
      {children}
    </div>

  );
}