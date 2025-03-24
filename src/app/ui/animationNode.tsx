import Image from "next/image"
import Link from "next/link"
import { node, ranking } from "../lib/types"


export default function AnimationNode({ node, ranking }: Readonly<{ node: node, ranking?: ranking }>) {


    return (
        <div className="w-min border-2 p-4 border-transparent rounded">
            <div className="w-full border-2 hover:border-cyan-100 rounded shadow-md hover:shadow-cyan-500 hover:scale-105">
                <div className="w-64 flex-shrink-0 flex h-80 overflow-hidden p-2 border-2 border-transparent background-intro-animation">
                    <Image className="flex-shrink-0 rounded" src={node.main_picture.large} width={480} height={640} alt={node.main_picture.medium} priority />
                </div>
                <div className="w-full h-24 border-2 border-transparent p-2 text-sm text-center font-bold font-mono">
                    {
                        ranking ? <p className="p-1 rounded-sm">RANKING {ranking.rank}</p> : <></>
                    }
                    <p className="p-1 rounded-sm">{node.title}</p>
                </div>
                <div className="w-full text-center p-2 text-sm">
                    <Link href={`/details/${node.id}`} >See more</Link>
                </div>
            </div>
        </div>
    )

}