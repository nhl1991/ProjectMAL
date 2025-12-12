import AnimePreviewList from "@/components/AnimationPreviewContainer";
import PageWrapper from "@/components/PageWrapper";



export default function Page() {

    const currentYear = new Date().getFullYear();
    const SEASON = ['winter', 'spring', 'summer', 'fall'];


    return (
        <PageWrapper>
            <div className="w-full h-full overflow-scroll px-4">
                    {
                        Array.isArray(SEASON) && SEASON.map((item, i) => {
                            return <div key={i} className="w-full h-max p-2">
                                <AnimePreviewList type={`anime/season/${currentYear}/${item}`} query={`offset=0&limit=10&sort=anime_num_list_users`} title={`THIS ${item}`} />
                            </div>
                        })}
            </div>
        </PageWrapper>
    )
}