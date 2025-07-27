
import AnimePreviewList from "@/components/AnimePreviewList";
import Loading from "@/components/loading";
import PageWrapper from "@/components/PageWrapper";
import { Suspense } from "react";


export default function Page() {
    const currentYear = new Date().getFullYear();
    const season = ['winter', 'spring', 'summer', 'fall'];


    return (
        <PageWrapper>
            <div className="w-full h-full p-2">
                <Suspense fallback={<Loading />}>
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