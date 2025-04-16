
import { getAnimationBySeason } from "@/app/lib/fetch";
import { MAL } from "@/app/lib/types";
import Loading from "@/app/ranking/[ranking_type]/ui/loading";
import AnimationContainer from "@/app/ui/animationContainer";
import AnimationNode from "@/app/ui/animationNode";
import NoData from "@/app/ui/noData";
import { Suspense } from "react";





export default async function Page({ params, }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params; // [0] : year, [1] : season
    const response = await getAnimationBySeason(slug[0], slug[1]);



    return (

        <div className="w-full h-full py-2">
            <div className="w-full h-18 my-2 p-2 rounded ">
                <h1 className="text-3xl text-center py-4"><b>{slug[0]} {slug[1].toUpperCase()}</b></h1>
            </div>
            <AnimationContainer>
                <Suspense fallback={<Loading />}>
                    {response ?
                        response.data.map((item: MAL, i: number) => {
                            return <AnimationNode key={i} node={item.node} />
                        }) : <NoData />
                    }
                </Suspense>
            </AnimationContainer>
        </div>

    )
}