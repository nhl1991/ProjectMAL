
import Detail from "./ui/detailComponent";
import { getAnimationDetail } from '@/app/lib/fetch';
import Loading from "@/app/ui/loading";
import PageWrapper from "@/app/ui/PageWrapper";
import { Suspense } from "react";
import Title from "./ui/titleComponent";

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
            <Title title={response.title} image={response.main_picture.medium} alternative_title={response.alternative_titles} />
            <PageWrapper>
                <Suspense fallback={<Loading />}>
                    <Detail data={response} />
                </Suspense>
            </PageWrapper>
        </>
    )
}