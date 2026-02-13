'use client'

export default function ResultsSection({children}:{children:React.ReactNode}){

    return(
        <section className="w-full flex flex-col gap-y-4 p-2">
            {children}
        </section>
    )
}