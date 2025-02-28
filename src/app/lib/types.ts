

type node = {
    id: number,
    title: string,
    main_picture: {
        medium: string,
        large: string,
    }
    mean?: number,

}

type alternative_titles = {
    en: string,
    ja: string,
}

type ranking = {
    rank: number,
}

type relatedAnime = {
    node: node,
    relation_type: string,
    relation_type_formatted: string,
}

type MAL =
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
