import AnimationNode from "@/components/animationNode"
import { getAnimationBySeason } from "@/lib/fetch"
import { MAL } from "@/lib/types"



export default async function CurrentSeasonAnime({ year, season }: { year: number, season: string }) {

    const response = await getAnimationBySeason(`/season/${year}/${season}?offset=0&limit=10`)
    
    return (
        <div className="w-full min-h-max p-2">
            <div className="w-max p-2 rounded-2xl ">
                <div className="font-bold text-2xl flex">
                    <h1 className="px-2">THIS {season.toUpperCase()}</h1>
                </div>
            </div>
            <div className="w-full h-64 flex gap-2 p-4 overflow-x-scroll">
                {
                    response && response != undefined ? response.data.map((item: MAL, i: number) => {
                        return <div key={i} className="flex-none w-48 h-full"><AnimationNode  node={item.node} ranking={item.ranking} /></div>
                    }) : null
                }
                {/* {response ? <Paging paging={response.paging} /> : null} */}
            </div>
        </div>
    )
}