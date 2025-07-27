
import { node, ranking } from "@/lib/types"
import styles from "./animationNode.module.css";
import ImageWithLink from "./ImageWithLink";


export default function AnimationNode({ node, ranking }: Readonly<{ node: node, ranking?: ranking }>) {

    return (
        <div className="w-full h-full relative md:items-center justify-center grid grid-cols-1 grid-rows-6" >
            <div className="w-full h-full row-[1/6] relative hover:opacity-80 hover:scale-105 cursor-pointer ">
                {ranking ? <div className="w-12 md:w-16 h-full absolute z-50 bg-black/50 flex justify-center items-center">
                    <p className={` px-1 text-3xl md:text-4xl lg:text-6xl ${styles.rankTextStroke}`}>{ranking.rank}</p>
                </div> : <></>}
                {node.main_picture ? <ImageWithLink id={node.id} image_large={node.main_picture.large} image_medium={node.main_picture.medium} /> : null}
            </div>
            <div className="w-full row-start-6  flex items-end md:items-center justify-end md:text-sm text-[9px] font-semibold">
                <span className="w-full bg-black line-clamp-1 relative px-4 md:px-0 text-center md:text-end ">{node.title}</span>
            </div>
        </div>
    )

}