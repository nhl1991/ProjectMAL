
export default function     AnimationContainer(
    { children }:
        Readonly<{
            children: React.ReactNode;
        }>
) {
    return (
        <>
            
                <div className="w-full h-full grid md:grid-cols-5 md:grid-rows-2 grid-cols-2 grid-rows-5 gap-4 p-4">
                    {children}
                </div>

        </>
    )
}