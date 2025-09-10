
export default function AnimationListWrapper(
    { children }:
        Readonly<{
            children: React.ReactNode;
        }>

        // /grid grid-cols-[repeat(4,min(90px))] grid-rows-[repeat(2,min(180px))] md:grid-cols-[repeat(4,min(240px))] md:grid-rows-[repeat(2,min(360px))] gap-2 md:gap-4 justify-center items-center p-2
) {
    return (
        <>
    
            <ul className="h-max grid md:grid-cols-[repeat(5,minmax(96px,240px))] md:grid-rows-[repeat(4,minmax(96px,240px))] grid-cols-[repeat(2,minmax(164px,256px))] grid-rows-[repeat(5,minmax(164px,1fr))] auto-rows-[minmax(96px,1fr)] md:gap-8 gap-4 p-4  justify-self-center">
                {children}
            </ul>

        </>
    )
}