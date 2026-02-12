"use client";

import { useOptionStore } from "@/lib/stores";
import { ChangeEvent } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function RankingType() {
  const RANKING_TYPE = [
    "all",
    "airing",
    "upcoming",
    "tv",
    "ova",
    "movie",
    "special",
    "bypopularity",
    "favorite",
  ];
  const { setRankingType } = useOptionStore();
  return (
    <div className="w-full flex gap-x-2 items-center text-xl rounded-xl py-2 px-4 shaodw-lg justify-end">
      {/* <label htmlFor="select-type">{rankingType}</label> */}
      <Select onValueChange={(v) => setRankingType(v)}>
        <SelectTrigger className="w-[180px]" >
          <SelectValue placeholder="Select a Ranking Type"  />
        </SelectTrigger>
        <SelectContent  >
          <SelectGroup >
            {RANKING_TYPE.map((item) => (
              <SelectItem key={item} value={item}>
                {item.toUpperCase()}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {/* <select
        id="select-type"
        defaultValue={rankingType}
        className="w-max px-2 bg-transparent rounded-xl"
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          setRankingType(e.currentTarget.value)
        }
      >
        {RANKING_TYPE.map((item) => (
          <option key={item} value={item}>
            {item.toUpperCase()}
          </option>
        ))}
      </select> */}
      <hr />
    </div>
  );
}
