"use client"

export default function StatusSection({children}:{children:React.ReactNode}){
    return(
        <section className="w-full md:h-[320px] h-[160px] flex flex-col items-center justify-center">
            {children}
        </section>
    )
}