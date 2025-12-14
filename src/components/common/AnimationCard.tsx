"use client";
import { AnimationData } from "@/types/animation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AnimationCard({ item }: { item: AnimationData }) {
  const { node } = item;
  const [hover, isHover] = useState(false);

  return (
    <article className="place-content-center place-items-center">
      <figure
        className="relative md:w-48 md:h-64 w-full h-32 overflow-hidden rounded-xl"
        onMouseEnter={() => isHover(true)}
        onMouseLeave={() => isHover(false)}
      >
        <Image
          src={node.main_picture.large}
          fill
          className="object-cover z-10"
          sizes="(max-width: 768px) 33vw, 50vw"
          alt={node.title + ` image`}
        />
        {hover ? (
          <Link
            className="w-full h-full absolute top-0 z-20 bg-black/50 flex items-center justify-center"
            href={`/details/${node.id}`}
          >
            <p className="text-center md:text-base text-xs px-2">{node.title}</p>
          </Link>
        ) : null}
      </figure>
    </article>
  );
}
