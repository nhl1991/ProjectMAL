"use client";
import { node, ranking } from "@/lib/types";
import styles from "./animationNode.module.css";
import ImageWithLink from "./ImageWithLink";
import { useState } from "react";
import Link from "next/link";

export default function AnimationNode({
  node,
  ranking,
  priority,
}: Readonly<{ node: node; ranking?: ranking; priority?: boolean }>) {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <article
      className="w-full h-full relative hover:scale-105 p-2"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      
      <div className="w-full h-full relative cursor-pointer">
        {isHover ? (
        <Link
          className="w-full h-full bg-black/80 p-4 absolute z-50  rounded-xl flex items-center justify-center"
          href={`/details/${node.id}`}  aria-label={`Show ${node.title} detail `}
        >
            <div className="px-4">
              <span className="relative text-xl font-bold text-white">
                {node.title}
              </span>
            </div>
        </Link>
      ) : null}
        {ranking ? (
          <div className="absolute z-50 flex justify-center items-center">
            <p
              className={` px-1 text-3xl md:text-4xl lg:text-8xl ${styles.rankTextStroke}`}
            >
              {ranking.rank}
            </p>
          </div>
        ) : (
          <></>
        )}
        {node.main_picture ? (
          <ImageWithLink
            id={node.id}
            title={node.title}
            image_large={node.main_picture.large}
            priority={priority ?? false}
          />
        ) : null}
      </div>
    </article>
  );
}
