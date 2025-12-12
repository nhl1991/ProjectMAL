export default function ListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <div className="w-full h-full flex items-center justify-end "><Navigation /></div> */}

      {children}
    </>
  );
}
