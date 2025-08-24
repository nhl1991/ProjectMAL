
import AnimationNodeSkeletonContainer from "@/components/animationNodeSkeleton";
import AnimePreviewList from "@/components/AnimationPreviewContainer";
import Loading from "@/components/loading";
import PageWrapper from "@/components/PageWrapper";
import { Suspense } from "react";


export default function Page() {
    const currentYear = new Date().getFullYear();
    const season = ['winter', 'spring', 'summer', 'fall'];


    return (
        <PageWrapper>
            <div className="w-full h-full overflow-scroll px-4">
                <Suspense fallback={<AnimationNodeSkeletonContainer />}>
                    {
                        Array.isArray(season) && season.map((item, i) => {
                            return <div key={i} className="w-full h-max p-2">
                                <AnimePreviewList type={`anime/season/${currentYear}/${item}`} query={`offset=0&limit=10&sort=anime_num_list_users`} title={`THIS ${item}`} />
                            </div>
                        })}
                </Suspense>
            </div>
        </PageWrapper>
    )
}