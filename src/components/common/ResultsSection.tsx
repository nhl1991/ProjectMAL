'use client'

export default function ResultsSection({children}:{children:React.ReactNode}){

    return(
        <section className="w-full flex flex-col shadow-lg dark:shadow-slate-800">
            {children}
        </section>
    )
}