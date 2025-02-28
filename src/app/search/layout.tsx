'use client'
import { usePathname, useSearchParams } from "next/navigation";
import SearchBar from "./ui/searchBar";

export default function ListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const searchParams = useSearchParams().get('q');
  //console.log('query? : ', searchParams);
  return (
    <div className="w-full h-full">
      <div className={` ${searchParams
          ? 'h-16'
          : 'h-full'
        } w-full  px-2 flex items-center justify-center flex-col transition-all duration-500 ease-in-out`}>

          
        <SearchBar />
      </div>
      {children}
    </div>

  );
}