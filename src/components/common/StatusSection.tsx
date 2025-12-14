"use client"

export default function StatusSection({children}:{children:React.ReactNode}){
    return(
        <section className="w-full min-h-screen flex flex-col items-center justify-center">
            {children}
        </section>
    )
}