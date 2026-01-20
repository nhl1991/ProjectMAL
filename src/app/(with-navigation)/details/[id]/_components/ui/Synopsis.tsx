"use client"

export default function Synopsis({synopsis}:{synopsis: string}){

    return <p className="max-w-lg w-full min-h-96 py-6 px-4 bg-slate-100 dark:bg-slate-900 rounded-xl">{synopsis}</p>
}