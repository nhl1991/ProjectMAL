
import type { Metadata } from "next";
import Navigation from "../ui/navigation";

export const metadata: Metadata = {
  title: "Search by season",
};

export default function SeasonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="w-full h-full grid grid-cols-1 grid-rows-12"><div className="w-full h-full col-span-full p-2 row-span-2 grid-cols-1 grid grid-rows-2 place-content-center">
      <div className="w-full h-full flex items-center justify-end "><Navigation /></div>
    </div>
      {children}
    </div>
  );
}
