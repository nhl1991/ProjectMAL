'use client'
import { node, ranking } from "@/lib/types"
import styles from "./animationNode.module.css";
import ImageWithLink from "./ImageWithLink";
import { useState } from "react";
import Link from "next/link";


export default function AnimationNode({ node, ranking, priority }: Readonly<{ node: node, ranking?: ranking, priority?: boolean }>) {
    const [isHover, setIsHover] = useState<boolean>(false);
    return (
        <div className="w-full h-full relative" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} >
            {
                isHover ? <div className="w-full h-full bg-black/80 absolute z-50  rounded-xl flex items-center justify-center">
                    <div className="">
                        <span className="w-full line-clamp-1 relative px-4 md:px-0 text-center md:text-end "><Link href={`/details/${node.id}`}>{node.title}</Link></span>
                    </div>
                </div> : null
            }
            <div className="w-full h-full row-[1/6] relative cursor-pointer ">
                {ranking ? <div className="absolute z-50 flex justify-center items-center">
                    <p className={` px-1 text-3xl md:text-4xl lg:text-8xl ${styles.rankTextStroke}`}>{ranking.rank}</p>
                </div> : <></>}
                {node.main_picture ? <ImageWithLink id={node.id} image_large={node.main_picture.large} image_medium={node.main_picture.medium} priority={priority ?? false} /> : null}
            </div>

        </div>
    )

}