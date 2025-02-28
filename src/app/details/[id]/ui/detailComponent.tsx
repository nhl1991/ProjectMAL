'use client'

import Image from "next/image"
import { MouseEvent, useState } from "react";
import RelatedAnimations from "./relatedAnimation";
import Title from "./titleComponent";
import Synopsis from "./synopsisComponent";
import Genres from "./genreComponent";
import Pictures from "./pictureComponent";
import RecommendationList from "./recommendationComponent";
import InformationComponent from "./informationComponent";

export default function Detail({ data }: Readonly<{
    data: any
}>) {
    const item = data;
    const [flip, setFlip] = useState(true);




    function flipHandler(e: MouseEvent<HTMLDivElement>) {
        setFlip(!flip);
        e.currentTarget.animate({
            opacity: [0, 1],
        },
            {
                // timing options
                duration: 1000,
                iterations: 1,
            },)
    }




    return (
        <>

            <Title title={item.title} alternative_title={item.alternative_titles} />

            {/* <div className="w-full h-max lg:flex lg:justify-center text-center text-sm font-extrabold rounded">
                <p className="w-max p-2 mx-1">Ranking {item.rank ? item.rank : '-'}</p>
                <p className="w-max p-2 mx-1">Rating  {item.mean ? item.mean : '-'}</p>
            </div> */}

            <div className="w-full h-min lg:h-16 order-2 lg:order-1">
                <hr/>
                <div className="flex lg:flex-row flex-col text-center lg:text-sm overflow-scroll">
                    <InformationComponent name="ranking" item={item.rank ? item.rank : '-'} />
                    <InformationComponent name="mean" item={item.mean ? item.mean : '-'} />
                    <InformationComponent name="quater" start_season={item.start_season ? item.start_season : ''} />
                    <InformationComponent name="aired" start_date={item.start_date ? item.start_date : ''} end_date={item.end_date ? item.end_date : ''} />
                    <InformationComponent name="type" item={item.media_type != 'unknown' ? item.media_type.toUpperCase() : '-'} />
                    <InformationComponent name="status" item={item.status.replaceAll('_', ' ').toUpperCase()} />
                    <InformationComponent name="episode" item={item.num_episodes} />
                    <InformationComponent name="rating" item={item.rating.replaceAll('_', '-').toUpperCase()} />
                    <InformationComponent name="average playtime" item={Number(item.average_episode_duration / 60).toFixed(0)} />
                    <InformationComponent name="broadcast" day_of_the_week={item.broadcast?.day_of_the_week ? item.broadcast.day_of_the_week : '-'} start_time={item.broadcast?.start_time ? item.broadcast.start_time : ''} />
                    <InformationComponent name="studios" item={item.studios ? item.studios : '-'} />

                </div>
                <hr/>
            </div>
            
            <div className="w-full h-max order-1 lg:flex border-2 border-transparent p-4">
                <div className="w-full lg:w-1/4 border-2lg:p-2 lg:flex-shrink-0 overlfow-scroll" onClick={flipHandler} >
                    {flip ? <Image className="w-full rounded border-2 border-transparent shadow-md shadow-slate-500" src={item.main_picture.large} width={480} height={640} alt="image will be prepared." />
                        : <RelatedAnimations related_anime={item.related_anime} />
                    }
                    <div className="w-full h-min p-1 my-1 flex justify-center">
                        <p className="w-max p-1 border-2 border-transparent rounded hover:bg-slate-100 text-center">{flip ? 'Show related Anime' : 'Show Image'}</p>
                    </div>
                </div>
                <div className="w-full lg:w-3/4 h-full">

                    <Synopsis synopsis={item.synopsis} />
                    <Genres genres={item.genres} />
                    <Pictures pictures={item.pictures} />

                </div>

            </div>
            {item.recommendations.length != 0 ? <RecommendationList recommendations={item.recommendations} /> : <></>}

        </>
    )
}