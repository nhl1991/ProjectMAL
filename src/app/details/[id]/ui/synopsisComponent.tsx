export default function Synopsis({ synopsis }: Readonly<{
    synopsis: string
}>) {

    return (
        <>
            <div className="w-full row-span-8 my-4 transition-all duration-1000 ease-in-out">
                <p className={` flex-shrink-0 p-2 transition-all duration-1000 ease-in-out rounded text-left md:text-center w-full h-max`}>{synopsis}</p>
                
            </div>
        </>
    )
}