export default function Synopsis({ synopsis }: Readonly<{
    synopsis: string
}>) {

    return (
        <>
            <div className="w-full px-4 overflow-scroll">
                <p className={` md:text-base text-xs `}>{synopsis}</p>
                
            </div>
        </>
    )
}