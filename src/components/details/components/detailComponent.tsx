'use client'

import Image from "next/image"
import Synopsis from "../ui/synopsisComponent";
import Genres from "./genreComponent";
import Pictures from "../ui/pictureComponent";
import RecommendationList from "../ui/recommendationComponent";
import InformationComponent from "../ui/informationComponent";
import { details } from "@/lib/types";

export default function Detail({ data }: Readonly<{
    data: details
}>) {
    const item = data;









    return (
        <div className="w-full min-h-full  grid grid-rows-6 gap-2 relative">
            {/* <Image className="rounded-2xl object-cover absolute opacity-30 -z-30" src={item.main_picture.large} fill alt="image will be prepared." /> */}
            <div className="w-full row-[1/3] flex justify-center items-center">

                <div className="w-64 md:w-96 aspect-[3/4] relative rounded-2xl " >
                    {item.main_picture.large ? <Image className="rounded-2xl object-cover" src={item.main_picture.large} fill alt="image will be prepared." /> : null}
                </div>
            </div>
            <div className="row-[3/4] flex flex-col  items-center justify-center">
                <div className="w-96 h-full bg-black/30 p-2 rounded-2xl">
                    <Synopsis synopsis={item.synopsis} />
                    <Genres genres={item.genres} />
                </div>
            </div>
            <div className="row-[4/5] flex items-center justify-center">
                <div className="w-96  p-2 rounded-2xl bg-black/30 ">
                    <InformationComponent name="ranking" item={item.rank ? item.rank : '-'} />
                    <InformationComponent name="mean" item={item.mean ? item.mean : '-'} />
                    <InformationComponent name="quater" item={[Array.isArray(item.start_season) && item.start_season.map((item) => { return item })]} />
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
            <div className="w-full h-full row-[5/6] overflow-scroll p-1 md:place-content-center md:place-items-center">
                
                {Array.isArray(item.pictures) && item.pictures.length > 0 ? <div className="w-max h-full flex items-center justify-center p-1 overflow-scroll">
                    
                    <Pictures pictures={item.pictures} />
                </div> : null}
            </div>
            <div className="w-full h-full row-[6/-1] p-1 overflow-scroll md:place-content-center md:place-items-center">
                {Array.isArray(item.recommendations) && item.recommendations.length > 0 ? <div className=" w-max h-full flex items-center justify-center p-1 overflow-scroll">
                    
                    <RecommendationList recommendations={item.recommendations} />
                </div> : null}
            </div>

        </div>
    )
}