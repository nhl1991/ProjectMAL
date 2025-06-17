export default function Synopsis({ synopsis }: Readonly<{
    synopsis: string
}>) {

    return (
        <>
            <div className="w-full md:max-w-[60%] max-h-[100%] px-4">
                <p className={` `}>{synopsis}</p>
                
            </div>
        </>
    )
}