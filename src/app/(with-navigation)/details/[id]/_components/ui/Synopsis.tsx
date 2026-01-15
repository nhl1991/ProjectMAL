"use client"

export default function Synopsis({synopsis}:{synopsis: string}){

    return <p className="max-w-lg py-6 px-4 bg-slate-900 rounded-xl">{synopsis}</p>
}