"use client";

import { useEffect, useState } from "react";

export default function AnimationPreviewSkeleton() {
    const [length, setLength] = useState(5);

    useEffect(() => {
        if(window.innerWidth <= 768) {
            setLength(4);
        }
    }, [])

  return (
    <>
      <header className="flex px-4 py-2 min-h-14"></header>
      <div className="flex p-2 ">
        <ul className="md:h-64 h-32 flex gap-2 w-full">
          {Array.from({ length: length }).map((_, i) => (
            <li key={i} className="flex-shrink-0">
              <AnimationPreviewItemSkeleton />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function AnimationPreviewItemSkeleton() {
  return (
    <article className="place-content-center place-items-center">
      <div className="relative md:w-48 md:h-64 w-24 h-32 overflow-hidden rounded-xl bg-slate-300 dark:bg-slate-800 animate-pulse"></div>
    </article>
  );
}
