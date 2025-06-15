'use client'
import Image from "next/image"

import { node, ranking } from "../lib/types"
import styles from "./animationNode.module.css";
import { useRouter } from "next/navigation";


export default function AnimationNode({ node, ranking }: Readonly<{ node: node, ranking?: ranking }>) {
    const route = useRouter();

    return (
        <div className="w-full h-full place-content-center p-2 grid grid-cols-1 grid-rows-6" >
            <div className="absolute">
                {ranking ? <p className={`relative px-2 text-[9rem] ${styles.rankTextStroke}`}>{ranking.rank}</p>: <></>}
            </div>
            <div className="row-[1/6] flex justify-end hover:opacity-80 hover:scale-105 cursor-pointer">
                <div className="w-2/3 h-full relative border-transparent border-2 rounded shadow-md " onClick={() => route.push(`/details/${node.id}`)}>

                    {node.main_picture ? <Image className="rounded-2xl object-cover" fill sizes="(max-width: 100%), 320px" src={node.main_picture.large} alt={node.main_picture.medium} /> : <div className="w-full flex flex-shrink-0 justify-center items-center border-2 rounded"><p>NO IMAGE</p></div>}


                </div>
            </div>
            <div className="flex items-center justify-end text-base font-semibold">
                <span>{node.title}</span></div>

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