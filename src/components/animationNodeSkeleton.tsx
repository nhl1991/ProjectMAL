export default function AnimationNodeSkeletonContainer() {
  return (
    <>
      {Array.from({ length: 10 }).map((_, index) => {
        return <AnimationNodeSkeleton key={index} />;
      })}
    </>
  );
}

function AnimationNodeSkeleton() {
  return (
    <div className="w-full h-full relative md:items-center justify-center grid grid-cols-1 grid-rows-6 bg-gray-900 animate-pulse rounded-2xl">
      <div className="w-full h-full row-[1/6] relative hover:opacity-80 hover:scale-105 cursor-pointer "></div>
      <div className="w-full row-start-6  flex items-end md:items-center justify-end md:text-sm text-[9px] font-semibold">
        <span className="w-full bg-black line-clamp-1 relative px-4 md:px-0 text-center md:text-end "></span>
      </div>
    </div>
  );
}
