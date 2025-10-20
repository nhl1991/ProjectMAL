'use client'

export default function ButtonPrevious(){


    return(
        
        <button className="px-4 py-1 rounded-2xl bg-sky-500 active:bg-sky-600 text-white" onClick={()=> window.history.back()}>BACK</button>
    )
}