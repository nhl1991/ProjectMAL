"use client"
import StatusSection from "../common/StatusSection";
import PageLoading from "../common/ui/PageLoading";
import ResultsSection from "../common/ResultsSection";
import Image from "next/image";
import { AnimationData, Genre, Picture } from "@/types/animation";
import AnimationCard from "../common/AnimationCard";
import AnimationImageCard from "./AnimationImageCard";
import DetailGridWrapper from "./ui/AnimationDetailGridWrapper";
import { useQuery } from "@tanstack/react-query";

const fetchDetails = async (params: string) => {
    const response = await fetch(`/api/details/${params}`, {
        method: "get",
    });
    const result = await response.json();
    if (response.ok) {
        return result;
    } else {
        if (result.message === "invalid q") throw new Error(`No results`);
        else throw new Error(result.message);
    }
}

export default function DetailsResults({ id }: { id: string }) {

    const { data, error, status } = useQuery({
        queryKey: ['details'],
        queryFn: () => fetchDetails(id),
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false,


    })
    if (status === "pending") return <StatusSection><PageLoading /></StatusSection>;
    if (status === "error") return <StatusSection><p className="py-24 text-2xl">{error.message}</p></StatusSection>;
    if (status === "success")
        if (!data) return <StatusSection><p>No data. Try something else</p></StatusSection>

    console.log(data.recommendations.length)
    return (
        <>

            <ResultsSection>
                <article className="w-full md:max-w-screen-xl flex flex-col gap-y-2 items-center">
                    <div className="flex flex-col items-center justify-center gap-y-2 px-2">
                        <h1 className="text-4xl">{data.title}</h1>
                        <h2>{data.alternative_titles.en ?? null} </h2>
                        <h2>{data.alternative_titles.ja ?? null} </h2>
                    </div>
                    

                    <figure className="relative md:max-w-72 w-full h-96">
                        <Image src={data.main_picture.large} fill sizes="(max-width: 768px) 100vw,33vw" className="object-contain" alt={data.title} priority />
                    </figure>
                    <div>
                        <ul className="flex gap-x-2 py-2 flex-wrap gap-y-2 px-8">
                            {
                                data.genres.map((g: Genre) => <li className="rounded-xl bg-sky-400 dark:bg-indigo-700 text-white px-3 py-1" key={g.id}><p key={g.name}>{g.name}</p></li>)
                            }
                        </ul>
                    </div>
                    <p className="max-w-lg py-8 px-2">
                        {data.synopsis}
                    </p>
                    {/* <p>{data.start_date}</p>
                    <p>{data.end_date}</p>
                    <p>{data.mean}</p>
                    <p>{data.rank}</p>
                    <p>{data.media_type.toUpperCase() ?? null}</p> */}
                    
                    {
                        data.pictures.length > 0 ? <>
                            <h3 className="py-10 text-2xl">IMAGES</h3>
                            <DetailGridWrapper>
                                {
                                    data.pictures.map((p: Picture, idx: number) => <AnimationImageCard key={idx} src={p.large} />)
                                }
                            </DetailGridWrapper>
                        </> : null
                    }
                    {
                        data.recommendations.length > 0 ? <>
                            <h3 className="py-10 text-2xl">Recommendations</h3>
                            <DetailGridWrapper>
                                {
                                    data.recommendations.map(
                                        (r: AnimationData) => <AnimationCard key={r.node.id} item={r} />
                                    )
                                }

                            </DetailGridWrapper>
                        </> : null
                    }
                </article>
            </ResultsSection>
        </>
    )
}
