

export const ranking_type = ['all', 'airing', 'upcoming', 'tv', 'ova', 'movie', 'special', 'bypopularity', 'favorite'];

export const seasonal_type = ['winter', 'spring', 'summer', 'autumn'];

export function getYears(){
    let years = [];
    for(let i = 2025; i >= 1970; i--){
        years.push(i);
    }
    
    return years;
}