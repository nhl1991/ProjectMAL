
import AnimationNode from "@/components/animationNode"
import Paging from "@/components/PagingComponent";
import { getAnimationPreview } from "@/lib/fetch"
import { MAL } from "@/lib/types"

export default async function Result({ type, query, title }: { type: string, query: string, title: string }) {
    // ranking or season =>
    // ranking v2/anime/ranking?ranking_type=${query}&offset=0&limit=10
    // season  v2/anime/season/${year}/${season}?offset=0&limit=10&sort=anime_num_list_users
    const response = await getAnimationPreview(`${type}?${query}`);

    return (
        <div className="w-full h-full p-2">
            <div className="w-full p-2 rounded-2xl items-center justify-center flex">
                <div className="font-bold text-2xl flex">
                    <h1 className="px-2">{title.toUpperCase()}</h1>
                </div>
            </div>
            <div className="grid grid-cols-[repeat(4,min(90px))] grid-rows-[repeat(2,min(180px))] md:grid-cols-[repeat(4,min(240px))] md:grid-rows-[repeat(2,min(360px))] gap-2 md:gap-4 justify-center items-center p-2">
                {
                    response ? response.data.map((item: MAL, i: number) => {
                        return <div key={i} className="w-full h-full ">
                            <AnimationNode node={item.node} ranking={item.ranking} priority={i < 2 ? true: false}/>
                        </div>
                    }) : <p>No Result.</p>
                }

                {/* {response ? <Paging paging={response.paging} /> : null} */}
            </div>
            {response && response.paging ? <Paging slug={'result'} paging={response.paging} /> : null}
        </div>
    )
}