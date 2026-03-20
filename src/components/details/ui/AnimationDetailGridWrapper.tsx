export default function DetailGridWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="w-full grid 
    grid-cols-[repeat(4,max(90px))]
    grid-rows-[repeat(auto-fill,max(128px))]
      md:grid-rows-[repeat(auto-fill,max(256px))]
    md:grid-cols-[repeat(4,max(198px))] gap-2 py-8 px-4 justify-center"
    >
      {children}
    </div>
  );
}
