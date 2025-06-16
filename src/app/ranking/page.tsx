import { headers } from "next/headers";
import { getAnimationByRanking } from "../lib/fetch";
import AnimationContainer from "../ui/animationContainer";
import Loading from "../ui/loading";
import { Suspense } from "react";
import AnimationNode from "../ui/animationNode";
import { MAL } from "../lib/types";
import Paging from "../ui/PagingComponent";


export default async function Page() {
    const headersList = headers();
    const fullUrl = (await headersList).get('x-url') || ''; // 커스텀 헤더 안 온다면 아래 방식 사용
    const path = fullUrl.split('/');
    const response = await getAnimationByRanking(path[3]);
    console.log(path[3]);
    return (

        <div className="w-full row-[2/-1] flex flex-col items-center justify-center">

            <AnimationContainer>
                <Suspense fallback={<Loading />}>
                    {
                        response ? response.data.map((item: MAL, i: number) => {
                            return <AnimationNode key={i} node={item.node} ranking={item.ranking} />
                        }) : null
                    }
                </Suspense>
                {response ? <Paging paging={response.paging} /> : null}
            </AnimationContainer>
        </div>
    )
    // return(
    //     <>
    //         {
    //             response.data.map((item, index)=>{
    //                 return <p key={index}>{item.node.title}</p>;
    //             })
    //         }
    //         

    //     </>
    // )

}