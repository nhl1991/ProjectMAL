import Navigation from "@/components/PageNavigation";

export default function DetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <section className="w-full h-full grid grid-rows-12 grid-cols-1">
      <nav className="w-full flex flex-col justify-between row-[1/2] p-2 ">
        <div className="w-full h-full  flex items-center justify-end "><Navigation /></div>
      </nav>
      <main className="row-[2/-1] place-content-center place-items-center">
        {children}
      </main>

    </section>
  );
}
