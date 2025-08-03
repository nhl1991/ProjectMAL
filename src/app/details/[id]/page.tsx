
import Detail from "@/components/details/components/detailComponent";
import { getAnimationDetail } from '@/lib/fetch';
import Loading from "@/components/loading";
import { Suspense } from "react";
import Title from "@/components/details/ui/titleComponent";

export async function generateMetadata(
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const response = await getAnimationDetail(id);

    return {
        title: response.title,
    }
}
export default async function Page({ params }: Readonly<{
    params: Promise<{ id: string }>
}>) {
    const { id } = await params;

    const response = await getAnimationDetail(id)

    return (
        <>
            <div className="w-full h-full overflow-scrolls  ">
            
                <Title title={response.title} alternative_title={response.alternative_titles} />


                <Suspense fallback={<Loading />}>
                    <Detail data={response} />
                </Suspense>
            </div>
        </>
    )
}