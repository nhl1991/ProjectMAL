

import { Suspense } from "react";
import { getAnimationBySearch } from "../lib/fetch";
import AnimationContainer from "../ui/animationContainer";
import SearchBar from "./ui/searchBar";
import AnimationNode from "../ui/animationNode";
import { MAL } from "../lib/types";
import Loading from "../ranking/[ranking_type]/ui/loading";

export default async function Page(props: {
    searchParams?: Promise<{
        q: string;
    }> | undefined;
}) {
    const searchParams = await props.searchParams;

    if (searchParams && 'q' in searchParams) {
        const { q } = searchParams;
        const response = await getAnimationBySearch(q);

        return (
            <>
                {response.data ?
                    <div className="w-full h-max ">
                        <SearchBar />
                        <AnimationContainer>
                            <Suspense fallback={<Loading />}>
                                {response.data.map((item: MAL, i: number) => {
                                    return <AnimationNode key={i} node={item.node} />;
                                })}
                            </Suspense>
                        </AnimationContainer>
                    </div> : <div className="w-full h-full flex flex-col items-center justify-center">
                        <h1>SEARCH</h1>
                        <SearchBar /></div>}

            </>
        )
    }else{
        console.log("No search query provided.");
    }


    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <h1>SEARCH</h1>
            <SearchBar /></div>
    )






}

