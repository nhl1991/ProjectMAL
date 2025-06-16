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
        <div className="w-full h-full grid grid-rows-2 grid-cols-1 md:grid-cols-5 auto-rows-[repeat(2,minmax(0,1fr))] gap-2 p-2 overflow-y-scroll">
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
        <div className="w-full h-full grid grid-rows-10 hover:scale-105">
            <div className="w-full h-full row-span-7 relative">
                <div
                    className="w-full h-full relative"
                    onClick={() => console.log(`/details/${node.id}`)}
                >
                    {
                        node.main_picture
                            ? <Image className="rounded-2xl object-cover" fill sizes="(max-width: 100%), 320px" src={node.main_picture.large} alt={node.main_picture.medium} />
                            : <div className="w-full h-full flex justify-center items-center border-2 rounded"><p>NO IMAGE</p></div>
                    }
                    
                </div>
            </div>
            <span className="w-full px-2 text-center text-white text-sm">{node.title}</span>
        </div>

        // <div className="w-full h-full" >
        //     <div className="w-full h-full relative">
        //         <div className="w-full h-full relative border-transparent border-2 rounded " onClick={() => console.log(`/details/${node.id}`)}>
        //             {node.main_picture ? <Image className="rounded-2xl object-cover" fill sizes="(max-width: 100%), 320px" src={node.main_picture.large} alt={node.main_picture.medium} /> : <div className="w-full flex flex-shrink-0 justify-center items-center border-2 rounded"><p>NO IMAGE</p></div>}
        //         <span className="bg-black/50 px-4 md:px-0 text-center md:text-end ">{node.title}</span>
        //         </div>

        //     </div>
        // </div>
    )

}