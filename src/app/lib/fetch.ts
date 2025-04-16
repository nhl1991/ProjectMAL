'use server'

export async function FetchAPI(url: string) {

    const response = await fetch(`https://api.myanimelist.net/${url}`, {
        headers: {
            "X-MAL-CLIENT-ID": `${process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_MAL_CLIENT_ID : process.env.MAL_CLIENT_ID}`
        },
        method: "GET",
    })
    const result = await response.json();
    console.log('Fetch function call : ', url);
    return result;
}

export async function getAnimationDetail(id:string){
    //saveDetails(result, `${id}.json`);
    return await FetchAPI(`v2/anime/${id}?fields=id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,related_anime,recommendations,studios`)
}

export async function getAnimationBySeason(year:string, season: string){
    //saveDetails(result, `${id}.json`);
    return await FetchAPI(`v2/anime/season/${year}/${season == 'autumn' ? 'fall' : season}?limit=100&offset=0&fields=mean`)
}

export async function getAnimationByRanking(ranking_type:string){
    //saveDetails(result, `${id}.json`);
    return await FetchAPI(`v2/anime/ranking?ranking_type=${ranking_type}&limit=100&fields=mean`)
}

export async function getAnimationBySearch(query:string){
    //saveDetails(result, `${id}.json`);
    return await FetchAPI(`v2/anime?q=${query}&limit=100&fields=mean`)
}