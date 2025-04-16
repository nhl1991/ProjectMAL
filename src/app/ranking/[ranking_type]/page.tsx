'use server'

import { getAnimationByRanking } from "@/app/lib/fetch";
import AnimationNode from "@/app/ui/animationNode";
import { Suspense } from "react";
import Loading from "./ui/loading";
import AnimationContainer from "@/app/ui/animationContainer";
import { MAL } from "@/app/lib/types";

export default async function Page({ params, }: { params: Promise<{ ranking_type: string }> }) {
  const {ranking_type} = await params;
  const response = await getAnimationByRanking(ranking_type);


  return (
    <>
      <div className="w-full h-full">
        <AnimationContainer>
          <Suspense fallback={<Loading />}>
            {
              response.data.map((item: MAL, i: number) => {

                return <AnimationNode key={i} node={item.node} ranking={item.ranking} />
              })
            }
          </Suspense>
        </AnimationContainer>
      </div>




    </>
  )
}