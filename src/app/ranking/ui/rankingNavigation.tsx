'use client'
import { ranking_type } from "@/app/lib/variables";
import Link from "next/link";


export default function RankingNavigation(){


    return(
        <>
        {
                ranking_type.map((item, i)=>{
                return <Link className={`mx-4 p-2 font-semibold text-2xl hover:text-slate-500 hover:border-b-slate-500`} 
                key={i} href={`/ranking?offset=0&ranking_type=${item}&limit=10`} >{item.toUpperCase()}</Link>
                })
            }
        </>
    )
}