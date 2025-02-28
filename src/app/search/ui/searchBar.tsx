'use client'
import { ChangeEvent, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function SearchBar() {
    const searchParams = useSearchParams();

    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term) => {

        const params = new URLSearchParams(searchParams);
        if (term) {
            //console.log('term : ', term);
            params.set('q', term);
        } else {
            params.delete('q');
        }

        replace(`${pathname}?${params.toString()}`);

    }, 300);


    return (
        <>
            <div className="w-full h-max p-2 flex justify-center text-black ">
                <input className="w-3/4 lg:w-1/3 dark:bg-black dark:text-white flex-shrink-0 px-2 border-b-2 border-slate-300 focus:outline-none" type="text" placeholder="SEARCH" onChange={(e: ChangeEvent<HTMLInputElement>) => handleSearch(e.currentTarget.value)}></input>
            </div>
        </>
    )
}