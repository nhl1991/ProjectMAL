import Navigation from "../ui/navigation";
import RankingNavigation from "./ui/rankingNavigation";


export default function ListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="w-full h-full grid grid-rows-12 ">
      <div className="w-full h-full col-span-full p-2 row-span-2 grid-cols-1 grid grid-rows-2 place-content-center">
        <div className="w-full h-full flex items-center justify-end "><Navigation /></div>
        <div className="w-full h-full flex justify-start items-center"><RankingNavigation /></div>
      </div>
      {children}
    </div>

  );
}