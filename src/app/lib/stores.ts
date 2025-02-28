import { create } from "zustand";
type State = {
    type: string,
    rankingType: string,
    season: string,
    year: string ,
}

type Action = {
    setType: (type: State['type']) => void,
    setRankingType: (type: State['rankingType']) => void,
    setSeasonType: (type: State['season']) => void,
    setSeasonYear: (type: State['year']) => void,
   
}
export const useOptionStore = create<State&Action>((set)=>({
    type: 'default',
    rankingType: 'all',
    season: 'winter',
    year: new Date().getFullYear().toString(),
    

    setType: (typeInput:string)=>set((state) => ({type: typeInput})),
    setSeasonType: (seasonInput:string)=>set((state) => ({season: seasonInput})),
    setRankingType: (rankingTypeInput:string)=>set((state) => ({rankingType: rankingTypeInput})),
    setSeasonYear: (yearInput:string)=>set((state)=>({year: yearInput})),
    
}))

type modalState = {
    modal: boolean
}
type modalAction = {
    setModal: (trigger:boolean) => void,
}

export const useModalStore = create<modalState & modalAction>((set) => ({
    modal: false,
    setModal:(trigger) => set(()=> ({modal: trigger}))
}))

//export const { type, rankingType, season, year, setType, setSeasonType, setRankingType, setSeasonYear } = useOptionStore();