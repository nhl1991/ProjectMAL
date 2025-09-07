import Navigation from "@/components/Navigation";

export default function DetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="w-full h-full grid grid-rows-12 grid-cols-1">
          <div className="w-full flex flex-col justify-between row-[1/2] p-2 ">
            <div className="w-full h-full  flex items-center justify-end "><Navigation /></div>
          </div>
          <div className="row-[2/-1] place-content-center place-items-center">
            {children}
          </div>
    
        </div>
  );
}
