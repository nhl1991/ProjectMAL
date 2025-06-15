'use client'




export default function ListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  return (
    <div className="w-full h-full grid grid-rows-12">
      
      {children}
    </div>

  );
}