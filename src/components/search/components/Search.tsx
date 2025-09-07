'use client'

export default function SearchComponent() {

    return <div className="flex justify-center items-center ">
        <form className=" w-64 md:w-full flex justify-center items-center" method="GET" action={'/api/search'}>
            <input name="q" className="w-full h-full border-b-2 focus:border-b-sky-400 px-2 py-1 dark:text-white dark:bg-black dark:focus:bg-transparent outline-none" type="text" placeholder="SEARCH" />
            <label htmlFor="search">
                <svg className="w-8 dark:fill-white fill-black hover:fill-sky-400 cursor-pointer" data-slot="icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path clipRule="evenodd" fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
                </svg>
            </label>
            <input className="hidden" id="search" type="submit" />
        </form>
    </div>
}