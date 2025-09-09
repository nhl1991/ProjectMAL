'use client'
import { node, ranking } from "@/lib/types"
import styles from "./animationNode.module.css";
import ImageWithLink from "./ImageWithLink";
import { useState } from "react";
import Link from "next/link";


export default function AnimationNode({ node, ranking, priority }: Readonly<{ node: node, ranking?: ranking, priority?: boolean }>) {
    const [isHover, setIsHover] = useState<boolean>(false);
    return (
        <div className="w-full h-full relative hover:scale-105 " onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} >
            {
                isHover ? <Link className="w-full h-full bg-black/80 absolute z-50  rounded-xl flex items-center justify-center" href={`/details/${node.id}`}>
                    <div>
                    <div className="px-4">
                        <span className="relative text-xl font-bold text-white">{node.title}</span>
                    </div>
                </div></Link> : null
            }
            <div className="w-full h-full relative cursor-pointer">
                {ranking ? <div className="absolute z-50 flex justify-center items-center">
                    <p className={` px-1 text-3xl md:text-4xl lg:text-8xl ${styles.rankTextStroke}`}>{ranking.rank}</p>
                </div> : <></>}
                {node.main_picture ? <ImageWithLink id={node.id} image_large={node.main_picture.large} image_medium={node.main_picture.medium} priority={priority ?? false} /> : null}
            </div>

        </div>
    )

}