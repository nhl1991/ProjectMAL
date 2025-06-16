import RankingNavigation from "./ui/rankingNavigation";


export default function ListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="w-full h-full grid grid-rows-12">
      <div className="col-span-full row-end-2 flex items-center md:justify-center outline-2 outline-black px-2 md:my-4 overflow-scroll">
        <RankingNavigation />
      </div>
      {children}
    </div>

  );
}