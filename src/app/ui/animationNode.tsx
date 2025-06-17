'use client'
import Image from "next/image"

import { node, ranking } from "../lib/types"
import styles from "./animationNode.module.css";
import { useRouter } from "next/navigation";


export default function AnimationNode({ node, ranking }: Readonly<{ node: node, ranking?: ranking }>) {
    const route = useRouter();

    return (
        <div className="w-full h-full relative md:place-content-center flex md:items-center md:justify-center md:grid md:grid-cols-1 md:grid-rows-6 md:gap-2 " >
            <div className="absolute z-50 ">
                {ranking ? <p className={` px-2  z-50 text-3xl md:text-6xl lg:text-9xl ${styles.rankTextStroke}`}>{ranking.rank}</p>: <></>}
            </div>
            <div className="w-full h-full md:row-[1/6] md:flex md:justify-end hover:opacity-80 hover:scale-105 cursor-pointer">
                <div className="w-full md:w-2/3 h-full  relative border-transparent border-2 rounded shadow-md " onClick={() => route.push(`/details/${node.id}`)}>
                    {node.main_picture ? <Image className="rounded-xl object-cover" fill sizes="(max-width: 100%), 320px" src={node.main_picture.large} alt={node.main_picture.medium} /> : <div className="w-full flex flex-shrink-0 justify-center items-center border-2 rounded"><p>NO IMAGE</p></div>}
                </div>
            </div>
            <div className="w-full absolute bottom-0 md:row-start-6  flex items-end md:items-center justify-end md:text-sm text-[9px] font-semibold">
                <span className="w-full bg-black relative px-4 md:px-0 text-center md:text-end ">{node.title}</span>
            </div>

            {/* {
                // 
            }
            <div className="w-full h-full bg-sky-500 flex flex-col items-center justify-center">

                
                <div className="absolute text-2xl">

                    

                </div>
            </div> */}
        </div>
    )

}