
'use client'
import Link from "next/link";
import { useOptionStore } from "../lib/stores"
import SelectOptions from "./ui/SelectOptionComponent";


export default function Page() {
    const { season, year } = useOptionStore();

    return (
        <div id="background" className="col-span-full row-span-full p-8 ">
            <div className="w-full h-full p-2 flex flex-col  items-center md:flex-col md:flex-shrink-0 justify-center border-2 border-transparent">
            {/* <h1 className="w-full h-min text-3xl text-center">{year}/{season}</h1> */}
                <div className="w-full h-36">
                    <SelectOptions />
                </div>
                <div className="bg-sky-600 px-4 py-2 rounded-2xl hover:bg-sky-600/80" >
                    <Link className="w-full h-max p-4 text-5xl  text-center " href={`/season/${year}/${season.toLowerCase()}?offset=0&limit=10`} replace >SEARCH</Link>
                </div>
            </div>
        </div>
    )
}