
import Detail from "@/components/details/components/detailComponent";
import { getAnimationDetail } from '@/lib/fetch';
import Image from "next/image";
import Loading from "@/components/loading";
import PageWrapper from "@/components/PageWrapper";
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
        <PageWrapper>
            <Title title={response.title} alternative_title={response.alternative_titles} />
            
                { response && response.main_picture.large ? <Image className="absolute rounded-2xl object-cover opacity-30 -z-30" src={response.main_picture.large} fill alt="image will be prepared." /> : null}
                <Suspense fallback={<Loading />}>
                    <Detail data={response} />
                </Suspense>
            </PageWrapper>
        </>
    )
}