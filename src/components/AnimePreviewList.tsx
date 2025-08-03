
import AnimationNode from "@/components/animationNode"
import { getAnimationPreview } from "@/lib/fetch"
import { MAL } from "@/lib/types"

export default async function AnimePreviewList({ type, query, title }: { type: string, query: string, title: string }) {
    // ranking or season =>
    // ranking v2/anime/ranking?ranking_type=${query}&offset=0&limit=10
    // season  v2/anime/season/${year}/${season}?offset=0&limit=10&sort=anime_num_list_users
    const response = await getAnimationPreview(`${type}?${query}`);

    return (
        <div className="w-full min-h-max p-2">
            <div className="w-max p-2 rounded-2xl ">
                <div className="font-bold text-2xl flex">
                    <h1 className="px-2">{title.toUpperCase()}</h1>
                </div>
            </div>
            <div className="w-full h-max overflow-scroll">
                <div className="w-max h-32 md:h-64 grid grid-cols-[repeat(10,min(150px))] gap-2 p-4 ">
                    {
                        Array.isArray(response.data) ? response.data.map((item: MAL, i: number) => {
                            return <div key={i} className="flex-none w-full h-full ">
                                <AnimationNode node={item.node} ranking={item.ranking} />
                            </div>
                        }) : null
                    }

                    {/* {response ? <Paging paging={response.paging} /> : null} */}
                </div>
            </div>
        </div>
    )
}