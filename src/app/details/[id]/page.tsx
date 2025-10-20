import Detail from "@/components/details/components/detailComponent";
import { getAnimationDetail } from "@/lib/fetch";
import Loading from "@/components/loading";
import { Suspense } from "react";
import Title from "@/components/details/ui/titleComponent";
import ButtonPrevious from "@/components/details/components/ButtonPrevious";


export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const response = await getAnimationDetail(id);

  return {
    title: response.title,
  };
}
export default async function Page({
  params,
}: Readonly<{
  params: Promise<{ id: string }>;
}>) {
  const { id } = await params;

  const response = await getAnimationDetail(id);

  if (response.error) {
    // API returns error with status 200

    return (
      <div className="w-max flex flex-col items-center justify-center gap-8">
        <h1>
          details/{id} NOT FOUND 
        </h1>
        <p>message: {response.error}</p>
        <ButtonPrevious />
      </div>
    );
  }

  return (
    <article className="w-full h-full overflow-scrolls  ">
      <Title
        title={response.title}
        alternative_title={response.alternative_titles}
      />

      <Suspense fallback={<Loading />}>
        <Detail data={response} />
      </Suspense>
    </article>
  );
}
