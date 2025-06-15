
export default function AnimationContainer(
    { children }:
        Readonly<{
            children: React.ReactNode;
        }>
) {
    return (
        <>
            
                <div className="w-full h-full grid grid-cols-5 grid-rows-2 gap-4 p-12">
                    {children}
                </div>

        </>
    )
}