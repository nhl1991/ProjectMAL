'use client'
import { node } from "@/lib/types"
import Image from "next/image";
import { useRouter } from "next/navigation";


interface recommendation {

    node: {
        id: number,
        title: string,
        main_picture: {
            medium: string,
            large: string
        }
    },
    num_recommendations: number,
    mean?: number,

}

export default function RecommendationList({ recommendations }: Readonly<{
    recommendations: recommendation[] | undefined
}>) {

    return (
        <div className="w-full h-full p-1">
            <div className="w-max h-full gap-2 grid place-content-center grid-cols-[repeat(4,min(100px))] grid-rows-2 grid-flow-col auto-cols-[min(100px)] p-2">

                {
                    recommendations?.map((item, i) => (
                        <RecommendationItemNode key={i} node={item.node} priority={i < 2 ? true : false} />
                    ))
                }
            </div>
        </div>
    )
}

function RecommendationItemNode({ node, priority }: Readonly<{ node: node, priority: boolean }>) {
    const router = useRouter();

    return (
        <>
            {
                node.main_picture
                    ? <figure className="w-full h-full relative  aspect-[4/3] hover:scale-105 cursor-pointer " onClick={()=> router.push(`/details/${node.id}`)}>
                        <Image className="object-cover" fill src={node.main_picture.large} alt={node.main_picture.medium} sizes="(max-width:768px) 100vw, 33vw" priority={priority}/>
                    </figure>
                    : null
            }
            {/* <p className="w-full absolute bg-black/70 bottom-0 px-2 text-center text-white text-sm">{node.title}</p> */}
        </>
    )

}