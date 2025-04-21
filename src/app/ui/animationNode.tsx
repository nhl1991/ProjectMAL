'use client'
import Image from "next/image"
import Link from "next/link"
import { node, ranking } from "../lib/types"
import styles from "./animationNode.module.css";
import { useRouter } from "next/navigation";


export default function AnimationNode({ node, ranking }: Readonly<{ node: node, ranking?: ranking }>) {
    const route = useRouter();

    return (
        <div className="w-full md:w-min md:border-2 p-1 md:p-4 border-transparent rounded relative" onClick={() => route.push(`/details/${node.id}`)}>
            {
                ranking ? <div className="w-min h-min absolute top-4 right-0 md:-left-1 md:top-0 opacity-50"><p className={`px-2 text-xl ${styles.rankTextStroke}`}>{ranking.rank}</p></div> : <></>
            }
            <div className="w-full md:w-full flex items-center relative md:block border-transparent border-2 hover:border-cyan-100 rounded shadow-md hover:shadow-cyan-500 md:hover:scale-105">

                <div className="w-32 h-40 md:w-64 md:h-80 flex-shrink-0 flex overflow-hidden p-2 border-2 border-transparent background-intro-animation relative">
                    {node.main_picture ? <Image className="flex-shrink-0 rounded" src={node.main_picture.large} width={480} height={640} alt={node.main_picture.medium} priority /> : <div className="w-full flex flex-shrink-0 justify-center items-center border-2 rounded"><p>NO IMAGE</p></div>}
                </div>
                <div className="md:w-full flex items-center md:h-24 border-2 border-transparent p-2 font-bold font-sans relative">

                    <div className="w-full">

                        <p className="w-full p-1 text-center text-sm md:text-lg text-black/70 rounded-sm">{node.title}</p>
                    </div>

                </div>
            </div>
        </div>
    )

}