
import Link from "next/link";

export default function Paging({ slug, paging }: {
    slug?: string|undefined,
    paging: {
        previous: string | undefined,
        next: string | undefined
    }
}) {
    const { previous, next } = paging ?? {};

    const splitURL = (path: string | undefined) => {
        if (path === undefined) return undefined;

        const splitArray = path.split('?');
        const query = splitArray[1];
        if (query) {
            return `${slug}?${query}`;
        } else if (query && query === 'season') {
            return`/${splitArray[5]}/${splitArray[6]}/${splitArray[7]}`;
        }else {
            return splitArray[1].replace('anime', 'search')
        }

    }
    


    const prevPage: string | undefined = splitURL(previous);
    const nextPage: string | undefined = splitURL(next);

    return (

        <div className="col-span-full flex gap-12 justify-evenly ">
            <Link href={prevPage ? prevPage : '#'}>
                <svg className="w-12" data-slot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z" />
                </svg></Link>
            <Link href={nextPage ? nextPage : '#'}>
                <svg className="w-12" data-slot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
                </svg>
            </Link>
        </div>
    )
}