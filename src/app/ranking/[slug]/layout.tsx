
import RankingNavigation from "./ui/rankingNavigation";

export default function ListLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    
  
    return (
        <div className="w-full">
          <div className="w-full h-12 outline-2 outline-black px-2 my-4 overflow-scroll">
            <RankingNavigation />
            </div>
          {children}
        </div>

    );
  }