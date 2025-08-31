import AnimationContainer from "@/components/animationContainer";
import AnimationNode from "@/components/animationNode";
import Loading from "@/components/loading";
import PageWrapper from "@/components/PageWrapper";
import Paging from "@/components/PagingComponent";
import { getAnimationByRanking } from "@/lib/fetch";
import { MAL } from "@/lib/types";
import { headers } from "next/headers";
import { Suspense } from "react";
import { ranking_type } from "@/lib/variables";
import AnimationNodeSkeleton from "@/components/animationNodeSkeleton";

export async function generateStaticParams() {
  return ranking_type.map((slug: string) => ({ slug }));
}

export const dynamicParams = false;

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const headersList = headers();
  const fullUrl = (await headersList).get("x-url") || "";
  const path = fullUrl.split("?");

  const { slug } = await params;
  const { data, paging } = await getAnimationByRanking(path[1]);

  return (
    <PageWrapper>
      {data ? (
        <AnimationContainer>
          <Suspense fallback={<AnimationNodeSkeleton />}>
            {data.map((item: MAL, i: number) => {
              return (
                <AnimationNode
                  key={i}
                  node={item.node}
                  ranking={item.ranking}
                />
              );
            })}
          </Suspense>
          {paging ? <Paging slug={slug} paging={paging} /> : null}
        </AnimationContainer>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div>
            <p className="text-2xl">Failed to get response data.</p>
          </div>
        </div>
      )}
    </PageWrapper>
  );
}
