"use client"
import AnimationCard from "@/components/common/AnimationCard";
import DetailGridWrapper from "@/components/details/ui/AnimationDetailGridWrapper";
import { AnimationData } from "@/types/animation";
import { useState } from "react";

export default function Recommendations({recommendations}:{
    recommendations: AnimationData[]
}) {

    const [toggle, setToggle] = useState<boolean>(false);
  return (
    <>
      <button className="font-bold py-1 text-2xl px-3 rounded-xl bg-sky-400 dark:bg-indigo-700 text-white"
      onClick={()=>setToggle(!toggle)}>
        RECOMMENDATIONS
      </button>
      {toggle ? <DetailGridWrapper>
        {recommendations.map((r: AnimationData) => (
          <AnimationCard key={r.node.id} item={r} />
        ))}
      </DetailGridWrapper> : null}
    </>
  );
}
