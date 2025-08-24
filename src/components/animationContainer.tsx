
export default function AnimationListWrapper(
    { children }:
        Readonly<{
            children: React.ReactNode;
        }>

        // /grid grid-cols-[repeat(4,min(90px))] grid-rows-[repeat(2,min(180px))] md:grid-cols-[repeat(4,min(240px))] md:grid-rows-[repeat(2,min(360px))] gap-2 md:gap-4 justify-center items-center p-2
) {
    return (
        <>
    
            <div className="w-full h-full grid md:grid-cols-[repeat(5,minmax(160px,320px))] md:grid-rows-[repeat(2,minmax(360px,720px))] grid-cols-2 grid-rows-5 md:gap-8 gap-4 p-4 items-center justify-center">
                {children}
            </div>

        </>
    )
}