'use client'
import { ChangeEvent, Suspense } from "react";
import { useDebouncedCallback } from "use-debounce";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function SearchBar() {

    return (
        <>
            <div className="w-full h-24 text-3xl p-2 flex justify-center text-black ">
                <Suspense>
                    <Search />
                    <svg className="h-24 p-2" data-slot="icon" fill="none" strokeWidth={1.5} stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </Suspense>
            </div>
        </>
    )
}


function Search() {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('q', term);
        } else {
            params.delete('q');
        }
        console.log(pathname, params.get('q'));
        //replace(`/${pathname}?offset=10&q=${params.toString()}&limit=10`);
    }, 300);

    return <input className="w-3/4 md:w-1/3 dark:bg-black dark:text-white flex-shrink-0 px-2 border-2 rounded-2xl border-slate-300 focus:outline-none" type="text" placeholder="SEARCH" onChange={(e: ChangeEvent<HTMLInputElement>) => handleSearch(e.currentTarget.value)}></input>
}