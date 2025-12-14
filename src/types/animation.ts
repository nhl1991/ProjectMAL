export interface AnimationNode {
    id: number,
    title: string,
    main_picture: {
        medium: string,
        large: string,
    }
}

export interface AnimationData {
    node: AnimationNode
    ranking?: Ranking
    season?: Season
}


export type Ranking = {
    rank: number,
}

export type Season = {
    year: number,
    season: string,
}

export type Genre = {
    id: number,
    name: string
}

export type Picture = {
    medium: string,
    large: string
}