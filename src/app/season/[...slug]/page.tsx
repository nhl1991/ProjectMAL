'use server'
import { getAnimationBySeason } from "@/app/lib/fetch";
import { MAL } from "@/app/lib/types";
import AnimationContainer from "@/app/ui/animationContainer";
import AnimationNode from "@/app/ui/animationNode";
import { Suspense } from "react";
import { headers } from "next/headers";
import Paging from "@/app/ui/PagingComponent";
import Loading from "@/app/ui/loading";
import PageWrapper from "@/app/ui/PageWrapper";





export default async function Page() {
    const headersList = headers();
    const fullUrl = (await headersList).get('x-url') || '';
    const path = fullUrl.split('/'); // searchParam[4]:year, searchParam[5]: season&query
    const query = `${path[3]}/${path[4]}/${path[5]}`;
    const response = await getAnimationBySeason(`${query}`);
    return (
        <PageWrapper>
            <AnimationContainer>
                <Suspense fallback={<Loading />}>
                    {response.data ?
                        response.data.map((item: MAL, i: number) => {
                            return <AnimationNode key={i} node={item.node} />
                        }) : null
                    }
                </Suspense>
                {response.paging ? <Paging paging={response.paging} /> : null}
            </AnimationContainer>
        </PageWrapper>

    )
}