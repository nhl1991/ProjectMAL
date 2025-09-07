export default function Synopsis({ synopsis }: Readonly<{
    synopsis: string
}>) {

    return (
        <>
            <div className="w-full h-full px-4 overflow-scroll">
                <p className={`text-[clamp(0.7rem,0.5rem+1vw,1rem)]`}>{synopsis}</p>
                
            </div>
        </>
    )
}