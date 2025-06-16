
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
        limit: string,
        offset: string,
    }> | undefined;
}) {
    const searchParams = await props.searchParams;
    //http://localhost:3000/search?q=uma
    //http://localhost:3000/anime?offset=10&q=uma&limit=10
    if (searchParams && 'q' in searchParams) {
        const {offset, q, limit} = searchParams
        const query = `anime?offset=${offset}&q=${q}&limit=${limit}`
        const response = await getAnimationBySearch(query);
        console.log(response.data.length)

        return (
            <>
                <div className={`col-span-full flex flex-col items-center justify-center row-[2/3]`}>
                    <SearchBar />
                </div>
                {searchParams && searchParams.q && response.data && response.data.length > 0 ?
                <div className="w-full row-[2/-1] flex flex-col items-center justify-center background-intro-animation">
                    <AnimationContainer>
                        <Suspense fallback={<Loading />}>
                            {response.data.map((item: MAL, i: number) => {
                                return <AnimationNode key={i} node={item.node} />;
                            })}
                        </Suspense>
                    { response.paging ? <Paging paging={response.paging} /> : null}
                    </AnimationContainer>
                </div> : <div className="w-full py-24 row-[3/-1] flex text-center flex-col place-content-center">
                
                <p className="w-full text-4xl font-extrabold p-2">Result not found.</p>
            </div>}
            </>
        )
    } else {
        return (
            <div className={`col-span-full flex flex-col items-center justify-center row-span-full`}>
                <SearchBar />
            </div>
        )
    }
}



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








