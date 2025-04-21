import { useState } from "react";

export default function Synopsis({ synopsis }: Readonly<{
    synopsis: string
}>) {
    const [view, setView] = useState(true);
    function viewHandler() {
        setView(!view);
    }

    return (
        <>
            <div className="w-full my-4 transition-all duration-1000 ease-in-out" onClick={viewHandler}>
                <p className={` flex-shrink-0 p-2 transition-all duration-1000 ease-in-out rounded ${view ? 'text-left md:text-center w-full h-max' : 'w-max'}`}>{view ? `${synopsis}` : ''}</p>
                <div className="w-full p-1 flex justify-center">
                    <p className="w-max text-center p-2 cursor-pointer rounded hover:bg-slate-200">{view ? 'Hide Synopsis' : 'Show Synopsis'}</p>
                </div>
            </div>
        </>
    )
}