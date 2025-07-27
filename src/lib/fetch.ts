'use server'

export async function FetchAPI(url: string) {
    const response = await fetch(`https://api.myanimelist.net/${url}`, {
        headers: {
            // "X-MAL-CLIENT-ID": `${process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_MAL_CLIENT_ID : process.env.MAL_CLIENT_ID}`
            "X-MAL-CLIENT-ID": `${process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_MAL_CLIENT_ID : process.env.MAL_CLIENT_ID}`,
        },
        method: "GET",
    })
    const result = await response.json();
    console.log('Fetch. => ', url);

    return result;
}

export async function getAnimationDetail(id: string) {
    return await FetchAPI(`v2/anime/${id}?fields=id,title,main_picture,streaming_platform,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,related_anime,recommendations,studios`)
}

// export async function getAnimationBySeason(year:string, season: string){
//     //http://localhost:3000/season/2025/winter
//     // next: 'https://api.myanimelist.net/v2/anime/season/2025/winter?offset=10&limit=10'
//     return await FetchAPI(`v2/anime/season/${year}/${season == 'autumn' ? 'fall' : season}?limit=10`)
// }

// export async function getAnimationByRanking(ranking_type:string){

//     return await FetchAPI(`v2/anime/ranking?ranking_type=${ranking_type}&limit=10`)
// }

export async function getAnimationBySearch(query: string | undefined) {
    if (query === undefined) return;


    return await FetchAPI(`v2/${query}`)
}

export async function getAnimationByRanking(query: string) {
    return await FetchAPI(`v2/anime/ranking?${query}`)
}
export async function getAnimationPreview(query: string) {
    // ranking : /v2/anime/ranking?ranking_type=all&limit=4
    // season : /v2/anime/season/2017/summer?limit=4
    // search : /v2/anime?q=one&limit=4
    if (query.includes('q')) {
        return await FetchAPI(`v2/${query}&limit=20`)
    }

    console.log(query);
    return await FetchAPI(`v2/${query}&limit=10`)
}



export async function getAnimationBySeason(query: string) {

    return await FetchAPI(`v2/anime/${query}&sort=anime_num_list_users`)
}