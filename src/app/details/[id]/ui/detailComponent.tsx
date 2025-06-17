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
        <div className="w-full min-h-full grid grid-rows-5 gap-2">

            <div className="w-full row-[1/2] flex justify-center p-2">
                <div className="min-w-[80%] h-full relative" >
                    {item.main_picture.large ? <Image className="rounded-2xl object-cover" src={item.main_picture.large} fill alt="image will be prepared." /> : null}
                </div>
            </div>
            <div className="row-[2/3] flex flex-col  items-center justify-center">
                <Synopsis synopsis={item.synopsis} />
                <Genres genres={item.genres} />
            </div>
            <div className="row-[3/4] flex items-center justify-center">
                <div className="w-max">
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
            </div>

            
                {item.recommendations != undefined && item.recommendations.length != 0 ? <div className=" p-4 overflow-scroll"><RecommendationList recommendations={item.recommendations} /></div> : <></>}
            
            <div className=" p-4 overflow-scroll md:p-12">
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