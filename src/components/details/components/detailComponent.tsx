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
        <div className="w-full min-h-full  grid grid-rows-5 gap-2 relative ">
            {/* <Image className="rounded-2xl object-cover absolute opacity-30 -z-30" src={item.main_picture.large} fill alt="image will be prepared." /> */}
            <div className="w-full row-[1/2] flex justify-center -z-10">

                <div className="w-full h-full relative rounded-2xl " >
                    {item.main_picture.large ? <Image className="object-[10%_43.59%] rounded-2xl object-cover" src={item.main_picture.large} fill alt="image will be prepared." /> : null}
                </div>
            </div>
            <div className="row-[2/3] w-full flex flex-col  items-center justify-center bg-black/30 p-2 rounded-2xl">
                <Synopsis synopsis={item.synopsis} />
                <Genres genres={item.genres} />
            </div>
            <div className="row-[3/4] flex items-center justify-center rounded-2xl bg-black/30">
                <div className="w-max  p-2  ">
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
            {Array.isArray(item.pictures) && item.pictures.length > 0 ? <div className="w-full p-4 overflow-x-scroll md:p-12">
                <h1 className="px-2 py-1 text-xl">Relate Image</h1>
                <Pictures pictures={item.pictures} />
            </div> : null}

            {Array.isArray(item.recommendations) && item.recommendations.length > 0 ? <div className="w-full p-4 overflow-x-scroll md:p-12">
                <h1 className="px-2 py-1 text-xl">Recommendation</h1>
                <RecommendationList recommendations={item.recommendations} />
            </div> : null}

        </div>
    )
}