

export type node = {
    id: number,
    title: string,
    main_picture: {
        medium: string,
        large: string,
    }
    mean?: number,

}


export type ranking = {
    rank: number,
}

export type relatedAnime = {
    node: node,
    relation_type: string,
    relation_type_formatted: string,
}

export type MAL =
    {
        node: node,
        ranking?: {
            rank: number,
        },

        season?: {
            year: number,
            season: string,
        }

        paging: {
            next: string,
        }


    }


export type details = {
    id: number,
    title: string,
    main_picture: {
        medium: string,
        large: string,
    }
    alternative_titles: {
        synonyms: string[],
        en: string,
        ja: string,
    },
    start_date: string,
    end_date: string,
    synopsis: string,
    mean: number,
    rank: number,
    popularity: number,
    media_type: string,
    status: string,
    genres: [
        {
            id: number,
            name: string
        }
    ],
    num_episodes: number,
    start_season: {
        year: number,
        season: string
    },
    broadcast: {
        day_of_the_week: string,
        start_time: string
    },
    source: string,
    average_episode_duration: number,
    rating: string,
    pictures:
    picture[] | undefined
    ,
    related_anime: related[] | undefined,
    recommendations: recommendation[]  | undefined,
    studios: studio[] | undefined
}


type recommendation = {
    node: {
        id: number,
        title: string,
        main_picture: {
            medium: string,
            large: string
        }
    },
    num_recommendations: number
}
export type picture = {
    medium: string,
    large: string
}
export type studio = {
    id: number,
    name: string,
}

export type related = {
    node: {
        id: number,
        title: string,
        main_picture: {
            medium: string,
            large: string,
        }
    },
    relation_type: string,
    relation_type_formatted: string
}


export type props = {
    name: string,
    item: number | object | string | string[] | studio[] | { year: number; season: string; }
}