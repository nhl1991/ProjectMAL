'use client'

import Image from "next/image"
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
        <div className="w-full h-full  grid md:grid-rows-12 md:grid-cols-12 gap-2">
            <div className="col-span-full grid-cols-1 grid-rows-11 row-end-[1/2] hidden md:grid md:grid-cols-12 bg-lime-200">
                <InformationComponent name="ranking" item={item.rank ? item.rank : '-'} />
                <InformationComponent name="mean" item={item.mean ? item.mean : '-'} />
                <InformationComponent name="quater" item={[item.start_season.season ? item.start_season.season : '', item.start_season.year ? item.start_season.year : '']} />
                <InformationComponent name="aired" item={[item.start_date ? item.start_date : '', item.end_date ? item.end_date : '']} />
                <InformationComponent name="type" item={item.media_type != 'unknown' ? item.media_type.toUpperCase() : '-'} />
                <InformationComponent name="status" item={item.status.replaceAll('_', ' ').toUpperCase()} />
                <InformationComponent name="episode" item={item.num_episodes} />
                <InformationComponent name="rating" item={item.rating.replaceAll('_', '-').toUpperCase()} />
                <InformationComponent name="average playtime" item={Number(item.average_episode_duration / 60).toFixed(0)} />
                <InformationComponent name="broadcast" item={item.broadcast != undefined ? [item.broadcast.day_of_the_week, item.broadcast.start_time] : '-'} />
                <InformationComponent name="studios" item={item.studios ? item.studios.map((item) => { return item.name; }) : '-'} />
            </div>
            <div className="col-span-3 row-span-10 ">
                <div className="md:w-full md:h-full md:flex-shrink-0 relative" >
                    {item.main_picture.large ? <Image className="rounded-2xl p-4 object-contain" src={item.main_picture.large} fill alt="image will be prepared." /> : null}
                </div>
            </div>
            <div className="col-[4/8] row-span-4 grid grid-rows-10">
                <Synopsis synopsis={item.synopsis} />
                <Genres genres={item.genres} />

            </div>
            <div className="col-[4/8] row-span-6 ">
                {item.recommendations != undefined ? <RecommendationList recommendations={item.recommendations} /> : <></>}
            </div>
            <div className="col-[8/-1] row-start-2 row-span-10">
                {item.pictures != undefined ? <Pictures pictures={item.pictures} /> : <></>}
            </div>
            {/* <div className="grid-rows-11 md:grid-rows-1 md:row-[1/2] grid md:grid-cols-12 gap-2 order-2 md:order-1 bg-blue-900">
                    
            </div>
            
            <div className="col-span-full row-span-6 order-1 md:flex border-2 border-transparent p-4">
                
                </div>
                <div className="w-full flex flex-col md:w-3/4 h-full">

                    

                </div>

            </div>
             */}

        </div>
    )
}