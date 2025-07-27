import AnimationContainer from "@/components/animationContainer";
import AnimationNode from "@/components/animationNode";
import Loading from "@/components/loading";
import PageWrapper from "@/components/PageWrapper";
import Paging from "@/components/PagingComponent";
import { getAnimationByRanking } from "@/lib/fetch";
import { MAL } from "@/lib/types";
import { headers } from "next/headers";
import { Suspense } from "react";

export default async function Page({ params } : { params: Promise<{ slug?: string }>}) {
    const headersList = headers();
    const fullUrl = (await headersList).get('x-url') || '';
    const path = fullUrl.split('?');

    const { slug } = await params;
    const response = await getAnimationByRanking(path[1]);

    return (
        <PageWrapper>
            <AnimationContainer>
                <Suspense fallback={<Loading />}>
                    {response && response.data ?
                        response.data.map((item: MAL, i: number) => {
                            return <AnimationNode key={i} node={item.node} ranking={item.ranking} />
                        }) : null
                    }
                </Suspense>
                {response.paging ? <Paging slug={slug} paging={response.paging} /> : null}
            </AnimationContainer>
        </PageWrapper>
    )

}