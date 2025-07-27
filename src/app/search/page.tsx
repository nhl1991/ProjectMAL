
import SearchBar from "../../components/search/ui/searchBar";

export default async function Page() {

    return (

        <div className="row-[2/-1] grid-cols-1 grid-rows-12 md:items-center md:justify-center overflow-scroll">
            <div className={`w-full h-full row-span-2 flex flex-col justify-center items-center`}>
                <h1 className="font-bold md:text-4xl p-4">What animation are you looking for?</h1>
                <SearchBar />
            </div>
        </div>
    )

}


