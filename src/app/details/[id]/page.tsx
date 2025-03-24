
import Detail from "./ui/detailComponent";
import { FetchAnimeDetails } from '@/app/lib/fetch';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "",
};
export default async function Page({ params }: Readonly<{
    params: Promise<{ id: string }>
}>){
    const {id} = await params;

    // const response = data;
    const response = await FetchAnimeDetails(id)
    const detail = response;
    metadata.title=detail.title;

    return(
        <div className="w-full h-full p-2 flex flex-col overflow-scroll md:text-xs lg:text-sm">
            <Detail data={detail} />
        </div>
    )
}