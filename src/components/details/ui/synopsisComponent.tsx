export default function Synopsis({ synopsis }: Readonly<{
    synopsis: string
}>) {

    return (
        <>
            <div className="px-4 overflow-scroll">
                <p className={`text-[clamp(0.7rem,0.5rem+1vw,1rem)] md:text-xl first-letter:md:text-2xl first-letter:text-xl`}>{synopsis}</p>
                
            </div>
        </>
    )
}