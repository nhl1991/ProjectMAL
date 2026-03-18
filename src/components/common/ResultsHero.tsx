
export default function ResultsHero({ title }: {title:string}){

    return(
        <h1 className="text-[clamp(2rem,2rem+1vw,3rem)] text-gradient text-center rounded-xl border-2 border-slate-200/50 py-4">
            {title}
        </h1>
    )
}