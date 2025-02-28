'use server'

import { saveDetails, saveJsonToFile } from "./files";


export async function FetchMAL(url: string) {
    //console.log('fetch 요청')
    const response = await fetch(url, {
        headers: {
            "X-MAL-CLIENT-ID": `${process.env.MAL_CLIENT_ID}`
        },
        method: "GET",
    })
    const result = await response.json();
    console.log('Fetch function call : ', url);
    
    if(url.includes('season')){
        const splitURL = url.split('/');
        
        const year = splitURL[6];
        const season = splitURL[7].split('?')[0];
        saveJsonToFile(result,`${year}-${season}.json`)
    }else if(url.includes('ranking')){
        const indexStart = url.indexOf('=');
        const indexEnd = url.indexOf('&');
        const rankingType = url.slice(indexStart+1, indexEnd);

        saveJsonToFile(result, `Ranking-${rankingType}.json`);
    }


    return result.data;
}

export async function FetchAnimeDetails(id:string){
    const response = await fetch(`https://api.myanimelist.net/v2/anime/${id}?fields=id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,related_anime,recommendations,studios`, {
        headers: {
            "X-MAL-CLIENT-ID": `${process.env.MAL_CLIENT_ID}`
        },
        method: "GET",
    })
    console.log('Fetch function call : /details/', id);
    const result = await response.json();

    saveDetails(result, `${id}.json`);

    return result;
}