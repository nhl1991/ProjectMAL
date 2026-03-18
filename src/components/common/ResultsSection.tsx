'use client'

export default function ResultsSection({children}:{children:React.ReactNode}){

    return(
        <section className="w-full flex flex-col gap-y-2 rounded-xl  shadow-xl py-4">
            {children}
        </section>
    )
}