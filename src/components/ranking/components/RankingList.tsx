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


export default function RankingList({ ranking_type }: { ranking_type: string }) {
    console.log(ranking_type)
    const {
        data,
        error,
        status,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useInfiniteQuery({
        queryKey: ['animation', ranking_type],
        queryFn: fetchAnimation,
        initialPageParam: `/ranking?ranking_type=${ranking_type}&limit=20&offset=0`,
        getNextPageParam: (lastPage) => lastPage.paging.next.split('/')[5],

    })
    return status === 'pending' ? (
        <Loading />
    ) : status === 'error' ? (
        <Error message={error.message} />
    ) : (
        <div className="w-full h-full p-8 overflow-scroll">
            {
                data ? data.pages.map((page, pageIndex) => (
                    <AnimationContainer key={pageIndex}>
                        {
                            page.data.map((item:MAL) => (
                                <AnimationNode key={item.node.id} node={item.node} ranking={item.ranking} />
                            ))
                        }
                    </AnimationContainer>
                )) : <NoData message="seeems nothing here.."/>
            }

            {
                hasNextPage ? <div className="flex items-center justify-center p-1"><button className="px-4 py-2 rounded-2xl text-2xl text-white bg-sky-500 hover:bg-sky-900" disabled={isFetchingNextPage} onClick={()=>fetchNextPage()}>{hasNextPage ? 'Load more...' : isFetchingNextPage ? 'Loading...' : 'End...'}</button></div> : null
            }
        </div>
    )
}