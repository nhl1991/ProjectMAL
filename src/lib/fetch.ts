"use server";

export async function FetchAPI(query: string, tags: string) {
  const url = new URL(query, `https://api.myanimelist.net/`);
  try {
    const response = await fetch(url, {
      cache: "force-cache",
      next: { revalidate: 21600, tags: [`${tags}`] },
      headers: {
        // "X-MAL-CLIENT-ID": `${process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_MAL_CLIENT_ID : process.env.MAL_CLIENT_ID}`
        "X-MAL-CLIENT-ID": `${
          process.env.NODE_ENV === "production"
            ? process.env.NEXT_PUBLIC_MAL_CLIENT_ID
            : process.env.MAL_CLIENT_ID
        }`,
      },
      method: "GET",
    });

    const result = await response.json();
    return result;

    // console.log('Fetch. => ', url);
  } catch (err) {
    console.log("Error: ", err);
  }
}

export async function getAnimationDetail(id: string) {
  return await FetchAPI(
    `v2/anime/${id}?fields=id,title,main_picture,streaming_platform,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,related_anime,recommendations,studios`,
    id
  );
}

export async function getAnimationBySearch(query: string | undefined) {
  //q=${q}&limit=${limit ?? '10'}&offset=${offset ?? '0'}
  if (query === undefined) return;

  const url = new URL(query, `https://api.myanimelist.net/`);
  const tag = url.searchParams.get('q');

  return await FetchAPI(`v2/${query}`, tag ?? 'search');
}

export async function getAnimationPreview(query: string) {

  // ranking : /v2/anime/ranking?ranking_type=all&limit=4
  // season : /v2/anime/season/2017/summer?limit=4
  // search : /v2/anime?q=one&limit=4
  // console.log(query.sea)
  const url = new URL(`/v2/${query}`, `https://api.myanimelist.net`);
  if (query.includes("ranking"))
    return await FetchAPI(
      `/v2/${query}`,
      `preview-ranking-${url.searchParams.get("ranking_type")}`
    );
  else if (query.includes("season")){
    const season = url.pathname.split('/')[3]
    const year = url.pathname.split('/')[4]
    return await FetchAPI(
      `v2/${query}`,
      `preview-season-${year}-${season}`
    );}
  else if (query.includes("q")) {
    return await FetchAPI(`v2/${query}&limit=8`, 'search');
  } else return;
}




export async function Fetch(query: string) {
  const url = new URL(`/v2/anime/${query}`, `https://api.myanimelist.net`);
  
  try {
    const response = await fetch(url, {
      headers: {
        // "X-MAL-CLIENT-ID": `${process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_MAL_CLIENT_ID : process.env.MAL_CLIENT_ID}`
        "X-MAL-CLIENT-ID": `${
          process.env.NODE_ENV === "production"
            ? process.env.NEXT_PUBLIC_MAL_CLIENT_ID
            : process.env.MAL_CLIENT_ID
        }`,
      },
      method: "GET",
    });

    return await response.json();

    // console.log('Fetch. => ', url);
  } catch (err) {
    console.log("Error: ", err);
  }
}