
import PageWrapper from "@/components/PageWrapper";
import { ranking_type } from "@/lib/variables";
import { Suspense } from "react";
import Loading from "@/components/loading";
import AnimePreviewList from "@/components/AnimePreviewList";

export default async function Page() {

    return (

        <PageWrapper>
            <div className="w-full h-full px-4">
                <Suspense fallback={<Loading />}>
                    {
                        Array.isArray(ranking_type) && ranking_type.map((item, i) => {

                            return <div key={i} className="w-full h-max p-2">
                                <AnimePreviewList type={'anime/ranking'} query={`ranking_type=${item}&offset=0&limit=10`} title={`TOP 10 - ${item}`} />
                            </div>
                        })}

                </Suspense>

            </div>
        </PageWrapper>
    )
}