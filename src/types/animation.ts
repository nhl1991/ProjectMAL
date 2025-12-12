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
}


export type Ranking = {
    rank: number,
}