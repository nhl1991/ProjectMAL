export const RANKING_TYPE = ['all', 'airing', 'upcoming', 'tv', 'ova', 'movie', 'special', 'bypopularity', 'favorite'];

export const SEASON_TYPE = ['winter', 'spring', 'summer', 'fall'];

export function getYears(){
    const years = [];
    const current = new Date().getFullYear();
    for(let i = current+1; i >= 1970; i--){
        years.push(i);
    }

    return years;
}

export function getCurrentSeason(){
    const month = new Date().getMonth();
    if(month <= 2) return 'winter';
    if(month <= 5) return 'spring';
    if(month <= 8) return 'summer';
    return 'fall';
}
