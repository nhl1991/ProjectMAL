
import PageWrapper from "@/components/PageWrapper";
import { ranking_type } from "@/lib/variables";
import { Suspense } from "react";
import AnimePreviewList from "@/components/AnimationPreviewContainer";
import AnimationNodeSkeletonContainer from "@/components/animationNodeSkeleton";

export default async function Page() {

    return (

        <PageWrapper>
            <div className="w-full h-full overflow-scroll px-4">
                <Suspense fallback={<AnimationNodeSkeletonContainer />}>
                    {
                        Array.isArray(ranking_type) && ranking_type.map((item, i) => {

                            return <div key={i} className="w-full h-max p-2 ">
                                <AnimePreviewList type={'anime/ranking'} query={`ranking_type=${item}&offset=0&limit=20`} title={`TOP 20 - ${item}`} />
                            </div>
                        })}

                </Suspense>

            </div>
        </PageWrapper>
    )
}