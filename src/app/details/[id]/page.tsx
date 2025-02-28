
import data from '@/MAL/details/54492.json' assert { type: 'json' };
import Detail from "./ui/detailComponent";
import { FetchAnimeDetails } from '@/app/lib/fetch';

export default async function Page({ params }: Readonly<{
    params: Promise<{ id: string }>
}>){
    const {id} = await params;

    const response = data 
    //const response = await FetchAnimeDetails(id)
    const detail = response;

    return(
        <div className="w-full h-full p-2 flex flex-col overflow-scroll md:text-xs lg:text-sm">
            <Detail data={detail} />
        </div>
    )
}