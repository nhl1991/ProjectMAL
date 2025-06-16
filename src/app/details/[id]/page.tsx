
import Detail from "./ui/detailComponent";
import { getAnimationDetail } from '@/app/lib/fetch';
import Loading from "@/app/ui/loading";
import { Suspense } from "react";

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
        <div className="w-full h-full grid grid-cols-12 grid-rows-12 p-2 overflow-scroll md:text-xs lg:text-sm">
            <Suspense fallback={<Loading />}>
                <Detail data={response} />
            </Suspense>
        </div>
    )
}