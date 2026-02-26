"use client";
import { AnimationData } from "@/types/animation";
import Image from "next/image";
import Link from "next/link";
import { PointerEvent, useState } from "react";

export default function AnimationCard({ item }: { item: AnimationData }) {
  const { node } = item;
  const [hover, isHover] = useState(false);
  const handler = (e: PointerEvent<HTMLElement>) => {
    if (e.pointerType === "mouse" && e.type === "pointerenter") isHover(true);
    else if (e.pointerType === "mouse" && e.type === "pointerleave") isHover(false);
    else return;
  };

  return (
    <article className="place-content-center place-items-center">
      <figure
        className="relative md:w-48 md:h-64 w-full h-32 overflow-hidden rounded-xl"
        onPointerEnter={handler}
        onPointerLeave={handler}
      >
        <Image
          src={node.main_picture.large}
          fill
          className="object-cover z-10"
          sizes="(max-width: 768px) 90px, 192px"
          loading={"lazy"}
          alt={node.title + ` image`}
        />
        {hover ? (
          <Link
            className="w-full h-full absolute top-0 z-20 bg-black/50 flex items-center justify-center"
            href={`/details/${node.id}`}
          >
            <p className="text-center md:text-base text-xs px-2 text-white font-bold">{node.title}</p>
          </Link>
        ) : null}
      </figure>
    </article>
  );
}
