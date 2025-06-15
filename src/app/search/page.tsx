

import { Suspense } from "react";
import { getAnimationBySearch } from "../lib/fetch";
import AnimationContainer from "../ui/animationContainer";
import SearchBar from "./ui/searchBar";
import AnimationNode from "../ui/animationNode";
import { MAL } from "../lib/types";
import Loading from "../ui/loading";
import Paging from "../ui/PagingComponent";


export default async function Page(props: {
    searchParams?: Promise<{
        q: string;
    }> | undefined;
}) {
    const searchParams = await props.searchParams;

    // if (searchParams && 'q' in searchParams) {
    //     const { q } = searchParams;
    //     const response = await getAnimationBySearch(q);
    // }

    // const response = await getAnimationBySearch(searchParams?.q);
    // console.log(response.paging)
    return (
        <>
            <div className={`col-span-full flex flex-col items-center justify-center ${searchParams && 'q' in searchParams ? 'row-end-2' : 'row-span-full '}`}>
                <SearchBar />
            </div>

            {/* {searchParams && searchParams.q && response.data ?
                <div className="w-full row-[2/-1] flex flex-col items-center justify-center background-intro-animation">
                    <AnimationContainer>
                        <Suspense fallback={<Loading />}>
                            {response.data.map((item: MAL, i: number) => {
                                return <AnimationNode key={i} node={item.node} />;
                            })}
                        </Suspense>
                    </AnimationContainer>
                    { response.paging ? <Paging paging={response.paging} /> : null}
                </div> : null} */}
        </>
    )


    
    // return (
    //     <>
    //         {q && response.data ?
    //             <div className="w-full row-[2/-1] flex flex-col items-center justify-center">
    //                 <SearchBar />
    //                 <AnimationContainer>
    //                     <Suspense fallback={<Loading />}>
    //                         {response.data.map((item: MAL, i: number) => {
    //                             return <AnimationNode key={i} node={item.node} />;
    //                         })}
    //                     </Suspense>
    //                 </AnimationContainer>
    //             </div> : <div className="row-span-full col-span-full flex flex-col items-center justify-center">
    //                 <h1>SEARCH</h1>
    //                 <SearchBar /></div>}

    //     </>
    // )
    // } else {

    // }






}

