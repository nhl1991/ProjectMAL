'use client'
import { ChangeEvent, Suspense } from "react";
import { useDebouncedCallback } from "use-debounce";
import { usePathname, useSearchParams, useRouter } from "next/navigation";


export default function SearchBar() {

    return (
        <>
            <div className="w-full h-max p-2 flex justify-center text-black ">
                <Suspense>
                    <Search />
                </Suspense>
            </div>
        </>
    )
}


function Search() {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const handleSearch = useDebouncedCallback((term) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('offset', '0');
            params.set('q', term);
            params.set('limit', '10');
        } else {
            params.delete('offset');
            params.delete('q');
            params.delete('limit');
        }
        router.push(`${pathname}?${params.toString()}`);
    }, 300);

    return <input className="w-3/4 md:w-1/3  flex-shrink-0 px-4 py-2 border-2 rounded-2xl border-slate-300 focus:outline-none text-center" type="text" placeholder="SEARCH" onChange={(e: ChangeEvent<HTMLInputElement>) => handleSearch(e.currentTarget.value)}></input>
}