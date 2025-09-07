'use client'
import Error from "@/app/error";
import AnimationContainer from "@/components/animationContainer";
import AnimationNode from "@/components/animationNode";
import Loading from "@/components/loading";
import NoData from "@/components/NoData";
import { MAL } from "@/lib/types";
import { useInfiniteQuery } from "@tanstack/react-query";

const fetchAnimation = async ({ pageParam }: { pageParam: string }) => {
    const response = await fetch(`/api/${pageParam}`);

    return response.json();
}
export default function SeasonList({ season, year }: { season: string, year: string }) {
    const {
        data,
        error,
        status,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useInfiniteQuery({
        queryKey: ['animation', season, year],
        queryFn: fetchAnimation,
        initialPageParam: `season/${year}/${season}?limit=20`,
        getNextPageParam: (lastPage) => `season/${year}/${season}?${lastPage.paging.next.split('?')[1]}`,

    })
    return status === 'pending' ? (
        <Loading />
    ) : status === 'error' ? (
        <Error message={error.message} />
    ) : (
        <div className="w-full h-full p-8 overflow-scroll">
            <div>
                <h1 className="text-2xl">{year}/{season}</h1>
            </div>
            {
                data ? data.pages.map((page, pageIndex) => (

                    <AnimationContainer key={pageIndex}>

                        {
                            page.data.map((item: MAL) => (
                                <AnimationNode key={item.node.id} node={item.node} ranking={item.ranking} />
                            ))
                        }
                    </AnimationContainer>
                )) : <NoData message="seeems nothing here.."/>
            }

            {
                hasNextPage ? <div className="w-full flex items-center justify-center"><button className="text-2xl" disabled={isFetchingNextPage} onClick={() => fetchNextPage()}>{hasNextPage ? 'Load more...' : isFetchingNextPage ? 'Loading...' : 'End...'}</button></div> : null
            }
        </div>
    )

}