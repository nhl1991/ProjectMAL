import { RefObject } from "react";


export default function SearchForm({ onClick, ref }: { onClick: () => void, ref: RefObject<HTMLInputElement | null> }) {
    return (
        <div className="flex gap-x-2 p-2">
            <input
                ref={ref}
                className="bg-transparent border-b-2 border-transparent focus:outline-none focus:border-sky-400 transition-colors duration-500 px-2 w-48"
                placeholder="Search"
                type="text"
                name="query"
            />
            <button
                className="btn-hover"
                type="button"
                name="search"
                onClick={onClick}
            >
                SEARCH
            </button>
        </div>
    )
}