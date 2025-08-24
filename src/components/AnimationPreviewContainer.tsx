
import { getAnimationPreview } from "@/lib/fetch";
import AnimationPreviewList from "./AnimationPreviewList";

export default async function AnimationPreviewContainer({
  type,
  query,
  title,
}: {
  type: string;
  query: string;
  title: string;
}) {
  // ranking or season =>
  // ranking v2/anime/ranking?ranking_type=${query}&offset=0&limit=10
  // season  v2/anime/season/${year}/${season}?offset=0&limit=10&sort=anime_num_list_users
  const { data } = await getAnimationPreview(`${type}?${query}`);


  return (
    <div className="w-full min-h-max p-2">
      <div className="w-max p-2 rounded-2xl ">
        <div className="font-bold text-2xl flex">
          <h1 className="px-2">{title.toUpperCase()}</h1>
        </div>
      </div>
      {data ? <AnimationPreviewList data={data} /> : null}
    </div>
  );
}

{
  /* {response ? <Paging paging={response.paging} /> : null} */
}
