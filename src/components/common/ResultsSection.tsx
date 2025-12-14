'use client'

export default function ResultsSection({children}:{children:React.ReactNode}){

    return(
        <section className="w-full flex flex-col">
            {children}
        </section>
    )
}