'use server'

import { setURL } from "@/app/api/getAnimationList/actions/actions";
import { FetchMAL } from "@/app/lib/fetch";
import AnimationNode from "@/app/ui/animationNode";
import { Suspense } from "react";
import Loading from "./ui/loading";
import AnimationContainer from "@/app/ui/animationContainer";

export default async function Page({ params, }: { params: Promise<{ slug: string }> }) {
  const type = (await params).slug;
  const newUrl = setURL('ranking', type);
  const data = await FetchMAL(newUrl);


  return (
    <>
      <div className="w-full h-full">
        <AnimationContainer>
          <Suspense fallback={<Loading />}>
            {
              data.map((item: MAL, i: number) => {

                return <AnimationNode key={i} node={item.node} ranking={item.ranking} />
              })
            }
          </Suspense>
        </AnimationContainer>
      </div>




    </>
  )
}