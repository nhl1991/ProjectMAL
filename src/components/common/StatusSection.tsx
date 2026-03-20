"use client"

export default function StatusSection({children}:{children:React.ReactNode}){
    return(
        <section className="w-full md:h-[80vh] h-[60vh] flex flex-col items-center justify-center">
            {children}
        </section>
    )
}