import { setURL } from "@/app/api/getAnimationList/actions/actions";
import { FetchMAL } from "@/app/lib/fetch";
import AnimationContainer from "@/app/ui/animationContainer";
import AnimationNode from "@/app/ui/animationNode";
import NoData from "@/app/ui/noData";
import Image from "next/image";




export default async function Page({ params, }: { params: Promise<{ slug: string }> }) {
    const type = (await params).slug;
    const year = type[0];
    const season = type[1];
    const url = setURL('season', season, year);

    const response = await FetchMAL(url);
    const data = response



    return (

        <div className="w-full h-full py-2">
            <div className="w-full h-18 my-2 p-2 rounded ">
                <h1 className="text-3xl text-center py-4"><b>{year} {season.toUpperCase()}</b></h1>
            </div>
            <AnimationContainer>
                { data ?
                    data.map((item: MAL, i: number) => {
                        return <AnimationNode key={i} node={item.node} />
                    }) : <NoData />
                }
            </AnimationContainer>
        </div>

    )
}