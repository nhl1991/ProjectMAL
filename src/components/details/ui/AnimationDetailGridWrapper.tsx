export default function DetailGridWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="w-full md:max-w-screen-xl grid 
    grid-rows-[repeat(auto-fill,minmax(1fr,256px))]
    grid-cols-[repeat(4,minmax(90px,198px))] gap-2 py-8 px-4 justify-center"
    >
      {children}
    </div>
  );
}
