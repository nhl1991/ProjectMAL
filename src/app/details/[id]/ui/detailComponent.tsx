'use client'

import Image from "next/image"
import Title from "./titleComponent";
import Synopsis from "./synopsisComponent";
import Genres from "./genreComponent";
import Pictures from "./pictureComponent";
import RecommendationList from "./recommendationComponent";
import InformationComponent from "./informationComponent";
import { details } from "@/app/lib/types";

export default function Detail({ data }: Readonly<{
    data: details
}>) {
    const item = data;
    



    




    return (
        <>

            <Title title={item.title} alternative_title={item.alternative_titles} />
            <div className="col-span-full grid-rows-11 row-span-6 md:row-span-2 grid md:grid-cols-11  md:h-16 order-2 md:order-1 bg-sky-300">
                    <InformationComponent name="ranking" item={item.rank ? item.rank : '-'} />
                    <InformationComponent name="mean" item={item.mean ? item.mean : '-'} />
                    <InformationComponent name="quater" item={[ item.start_season.season ? item.start_season.season : '', item.start_season.year ? item.start_season.year : '']} />
                    <InformationComponent name="aired" item={[item.start_date ? item.start_date : '', item.end_date ? item.end_date : '']} />
                    <InformationComponent name="type" item={item.media_type != 'unknown' ? item.media_type.toUpperCase() : '-'} />
                    <InformationComponent name="status" item={item.status.replaceAll('_', ' ').toUpperCase()} />
                    <InformationComponent name="episode" item={item.num_episodes} />
                    <InformationComponent name="rating" item={item.rating.replaceAll('_', '-').toUpperCase()} />
                    <InformationComponent name="average playtime" item={Number(item.average_episode_duration / 60).toFixed(0)} />
                    <InformationComponent name="broadcast" item={item.broadcast != undefined ? [item.broadcast.day_of_the_week, item.broadcast.start_time] : '-'} />
                    <InformationComponent name="studios" item={item.studios ? item.studios.map((item) => {return item.name;}) : '-'} />
            </div>
            
            <div className="col-span-full bg-sky-600 row-span-6 order-1 md:flex border-2 border-transparent p-4">
                <div className="w-full md:w-1/4 border-2 md:p-2 md:flex-shrink-0 overlfow-scroll" >
                    {item.main_picture.large ? <Image className="w-full rounded border-2 border-transparent shadow-md shadow-slate-500" src={item.main_picture.large} width={480} height={640} alt="image will be prepared." /> : null}
                    
                    <div className="w-full h-min p-1 my-1 flex justify-center">
                        <p className="w-max p-1 border-2 border-transparent rounded hover:bg-slate-100 text-center"></p>
                    </div>
                </div>
                <div className="w-full flex flex-col md:w-3/4 h-full">

                    <Synopsis synopsis={item.synopsis} />
                    <Genres genres={item.genres} />
                    {item.pictures != undefined ? <Pictures pictures={item.pictures} /> : <></>}

                </div>

            </div>
            {item.recommendations != undefined ? <RecommendationList recommendations={item.recommendations} /> : <></>}

        </>
    )
}