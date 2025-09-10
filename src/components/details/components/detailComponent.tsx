"use client";

import Image from "next/image";
import Synopsis from "../ui/synopsisComponent";
import Genres from "./genreComponent";
import Pictures from "../ui/pictureComponent";
import RecommendationList from "../ui/recommendationComponent";
import InformationComponent from "../ui/informationComponent";
import { details } from "@/lib/types";
import { useState } from "react";

export default function Detail({
  data,
}: Readonly<{
  data: details;
}>) {
  const item = data;
  const [showDetail, setShowDetail] = useState(false);

  return (
    <section className="w-full min-h-full  grid grid-rows-[repeat(6,minmax(240px,296px))] grid-cols-[repeat(1,minmax(160px,1200px))] gap-2 relative  justify-center">
      {/* <Image className="rounded-2xl object-cover absolute opacity-30 -z-30" src={item.main_picture.large} fill alt="image will be prepared." /> */}
      <figure className="w-full row-[1/3] flex justify-center items-center">
        <div className="w-64 md:w-96 aspect-[3/4] relative rounded-2xl ">
          {item.main_picture.large ? (
            <Image
              className="rounded-2xl object-cover"
              src={item.main_picture.large}
              fill
              sizes="(max-width:768px) 100vw, 50vw"
              alt="image will be prepared."
              priority
            />
          ) : null}
        </div>
      </figure>
      <section className="row-[3/5] w-full h-full flex-col flex items-center justify-center">
        <div className="">
          <ul className=" gap-2 font-bold flex" role="tablist">
            <li className={`px-4 py-1 rounded-2xl   ${showDetail ? '' : 'text-white bg-sky-400 transition-all duration-500'}`}><button className={` `} onClick={() => setShowDetail(false)}>Synopsis</button></li>
            <li className={`px-4 py-1 rounded-2xl  ${showDetail ? 'text-white bg-sky-400 transition-all duration-500' : ''}`}><button className={` `} onClick={() => setShowDetail(true)}>Detail</button></li>
          </ul>
        </div>
        <div className="max-w-[30rem] h-full overflow-scroll">

          {showDetail ? <div className="w-full h-full flex flex-col p-2">
            <InformationComponent
              name="ranking"
              item={item.rank ? item.rank : "-"}
            />
            <InformationComponent
              name="mean"
              item={item.mean ? item.mean : "-"}
            />
            <InformationComponent
              name="quater"
              item={[
                Array.isArray(item.start_season) &&
                item.start_season.map((item) => {
                  return item;
                }),
              ]}
            />
            <InformationComponent
              name="aired"
              item={[
                item.start_date ? item.start_date : "",
                item.end_date ? item.end_date : "",
              ]}
            />
            <InformationComponent
              name="type"
              item={
                item.media_type != "unknown" ? item.media_type.toUpperCase() : "-"
              }
            />
            <InformationComponent
              name="status"
              item={item.status.replaceAll("_", " ").toUpperCase()}
            />
            <InformationComponent name="episode" item={item.num_episodes} />
            <InformationComponent
              name="rating"
              item={item.rating.replaceAll("_", "-").toUpperCase()}
            />
            <InformationComponent
              name="average playtime"
              item={Number(item.average_episode_duration / 60).toFixed(0)}
            />
            <InformationComponent
              name="broadcast"
              item={
                item.broadcast != undefined
                  ? [item.broadcast.day_of_the_week, item.broadcast.start_time]
                  : "-"
              }
            />
            <InformationComponent
              name="studios"
              item={
                item.studios
                  ? item.studios.map((item) => {
                    return item.name;
                  })
                  : "-"
              }
            />
            <Genres genres={item.genres} />
          </div> : <div className="w-full flex-col p-2">
            <Synopsis synopsis={item.synopsis} />
          </div>

          }
        </div>

      </section>
      <section className="w-full h-full row-[5/6] p-1">
        <div className="w-full flex items-center justify-center">
          <h3 className=" font-semibold">Pictures</h3>
        </div>
        <div className="w-full h-full overflow-x-scroll md:place-content-center md:place-items-start  ">
          {Array.isArray(item.pictures) && item.pictures.length > 0 ? (
            <div className="w-max h-full flex items-center justify-center p-1 overflow-scroll">
              <Pictures pictures={item.pictures} />
            </div>
          ) : null}
        </div>
      </section>
      <section className="w-full h-full row-[6/-1] p-1">
        <div className="w-full flex items-center justify-center">
          <h3 className=" font-semibold">Recommendation</h3>
        </div>
        <div className="w-full h-full overflow-x-scroll md:place-content-center md:place-items-start ">
          {Array.isArray(item.recommendations) &&
            item.recommendations.length > 0 ? (
            <div className="w-max h-full  flex items-center justify-center p-1 overflow-scroll">
              <RecommendationList recommendations={item.recommendations} />
            </div>
          ) : null}
        </div>
      </section>
    </section>
  );
}
