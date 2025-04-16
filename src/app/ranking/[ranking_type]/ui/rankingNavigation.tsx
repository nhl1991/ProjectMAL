'use client'
import { ranking_type } from "@/app/lib/variables";
import { usePathname } from "next/navigation";
import Link from "next/link";


export default function RankingNavigation(){

    const pathname = usePathname();

    return(
        <>
        {
                ranking_type.map((item, i)=>{
                return <Link className={`mx-2 p-2 text-base border-b-4 hover:text-slate-500 hover:border-b-slate-500 ${pathname === '/ranking/'+item ? 'text-cyan-300 border-b-cyan-300 ':'border-transparent'}`} key={i} href={`/ranking/${item}`} >{item.toUpperCase()}</Link>
                })
            }
        </>
    )
}