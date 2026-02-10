"use client";
import Image from "next/image";
import Link from "next/link";
import { PointerEvent, useState } from "react";

export default function AnimationImageCard({ src }: { src: { medium: string, large: string } }) {

  const [hover, isHover] = useState(false);
  const handler = (e: PointerEvent<HTMLElement>) => {
      if (e.pointerType === "mouse" && e.type === "pointerenter") isHover(true);
      else if (e.pointerType === "mouse" && e.type === "pointerleave") isHover(false);
      else return;
    };
  return (
    <article className="place-content-center place-items-center">
      <Link href={src.large ?? src.medium} className="place-content-center place-items-center" target="_blank" rel="noopener noreferrer">
        <figure
          className="relative md:w-48 md:h-64 w-full h-32 overflow-hidden rounded-xl"
          onPointerEnter={handler}
          onPointerLeave={handler}
        >
          <Image
            src={src.medium ?? src.large}
            fill
            className={`object-cover z-10 transition-all duration-300 ${hover ? 'scale-110' : ''}`}
            sizes="(max-width: 768px) 33vw, 10vw"
            alt={"Image"}
            loading="lazy"
          />
        </figure>
      </Link>
    </article>
  );
}
