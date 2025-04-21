
'use client'
import Link from "next/link";
import { useOptionStore } from "../lib/stores"
import SeasonScrollBox from "./ui/SeasonSelectBox"
import YearScrollBox from "./ui/YearSelectBox"


export default function Page() {
    const { season, year } = useOptionStore();
    
    return (
        <div id="background" className="w-full h-full p-8">
            {/* <h1 className="w-full h-min text-3xl text-center">{year}/{season}</h1> */}
            <div className="w-full h-full p-2 flex flex-col  items-center md:flex-row md:flex-shrink-0 justify-center border-2 border-transparent">
                
                <YearScrollBox />
                <SeasonScrollBox />
                <div className="w-full md:w-max h-max my-12 overflow-scroll border-2 border-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center rounded-md" >
                    <Link className="w-full h-max p-4 text-5xl  text-center " href={`/season/${year}/${season.toLowerCase()}`} replace >SEARCH</Link>
                </div>
            </div>
        </div>
    )
}