'server-only'


//export function setURL(type: string, subType: string, year?:string): string;


export function setURL(type: string, subtype: string, year?:string){

    if(type==='ranking'){
        return `https://api.myanimelist.net/v2/anime/ranking?ranking_type=${subtype}&limit=100&fields=mean`
    }else if(type === 'season'){
        return `https://api.myanimelist.net/v2/anime/season/${year}/${subtype == 'autumn' ? 'fall' : subtype}?limit=100&offset=0&fields=mean`
    }else if(type === 'suggested'){
        return `https://api.myanimelist.net/v2/anime/suggestions`
    }else if(type === 'list'){
        return `https://api.myanimelist.net/v2/anime?q=${subtype}&limiet=100&fields=mean`
    }else{
        return '';
    }
    

}