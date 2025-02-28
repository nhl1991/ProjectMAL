
import { Suspense } from "react";
import { setURL } from "../api/getAnimationList/actions/actions";
import { FetchMAL } from "../lib/fetch";

import AnimationNode from "../ui/animationNode";
import SearchBar from "./ui/searchBar";
import AnimationContainer from "../ui/animationContainer";

export default async function Page(props: {
    searchParams?: Promise<{
        q?: string;
    }>;
}) {
    let url: string | undefined = '';
    const searchParams = await props.searchParams;
    let data;
    if (searchParams?.q) {
        url = setURL('list', searchParams.q)

        const response = await FetchMAL(url);
        data = response;
        console.log(data? true: false);
    }
    return (
        <>{ data ?
            <div className="w-full h-min ">
                <AnimationContainer>
                    <Suspense fallback={<p>Loading...</p>}>
                        {data.map((item: MAL, i: number) => {
                            return <AnimationNode key={i} node={item.node} />;
                        }) }
                    </Suspense>
                </AnimationContainer>
            </div> : <></>}

        </>
    )




}

