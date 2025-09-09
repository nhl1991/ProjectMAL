'use client'
import SelectOptions from "@/components/season/ui/SelectOptionComponent";
import Link from "next/link";


export default function SeasonNavigation() {

    return (
        <div className="w-full flex justify-end md:text-xl text-[9px]">
            <div className="flex justify-center items-center">
                <div>
                    <SelectOptions />
                </div>
                <div className="rounded-2xl bg-sky-500 hover:bg-sky-500/50 py-2 px-2 text-white">
                        <Link className="w-full md:h-36 px-4 py-2 text-center " href={`/season/list`} replace >GO!</Link>
                    </div>
            </div>
        </div>
    )
}