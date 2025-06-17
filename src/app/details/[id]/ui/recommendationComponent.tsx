'use client'
import { node } from "@/app/lib/types"
import Image from "next/image";


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
        <div className="w-full h-full gap-2 grid grid-cols-[repeat(4,min(50%))] md:grid-cols-[repeat(4,min(20%))] grid-rows-2 grid-flow-col md:auto-cols-[min(20%)] auto-cols-[min(50%)] overflow-scroll">
            {
                recommendations?.map((item, i) => (
                    <RecommendationItemNode key={i} node={item.node} />
                ))

            }

        </div>
        // <div className="w-full h-full grid grid-rows-2 grid-cols-4 auto-rows-[minmax(0,1fr)] gap-2 p-2 overflow-y-scroll">
        //             {
        //                 recommendations != undefined ?
        //                 recommendations.map((item: recommendation, i: number) => {
        //                     return <RecommendationItemNode key={i} node={item.node} />
        //                 }) : <></>
        //             }

        // </div>
    )
}

function RecommendationItemNode({ node }: Readonly<{ node: node }>) {


    return (
        <div className="w-full h-full relative">
            
                {
                    node.main_picture
                        ? <div
                        className="w-full h-full relative"
                        >
                            <Image className="rounded-2xl object-cover" fill src={node.main_picture.large} alt={node.main_picture.medium} /></div>
                        : null
                }
            <p className="w-full rounded-b-2xl absolute bg-black/50 bottom-0 z-50 px-2 text-center text-white text-sm">{node.title}</p>

        </div>
    )

}