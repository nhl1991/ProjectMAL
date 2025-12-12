import Navigation from "@/components/PageNavigation";
import RankingNavigation from "@/components/ranking/components/rankingNavigation";

export default function ListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className="flex flex-col justify-between md:justify-center p-2 ">
        <div className=" ">
          <Navigation />
        </div>
        <div className=" ">
          <RankingNavigation />
        </div>
      </nav>
      <main className="row-[3/-1] flex flex-col p-2 ">{children}</main>
    </>
    // <section className="w-full h-full grid grid-cols-1 grid-rows-12 ">
    /*  */

    // </section>
  );
}
