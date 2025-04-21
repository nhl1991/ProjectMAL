
export default function AnimationContainer(
    { children }:
        Readonly<{
            children: React.ReactNode;
        }>
) {
    return (
        <>
            <div className="w-full p-4 border-4 border-transparent rounded  transition-all duration-500 ease-in-out">
                <div className="w-full h-max p-1 md:p-8 md:flex box-border overflow-scroll border-4 border-transparent rounded  transition-all duration-500 ease-in-out">
                    {children}
                </div>
            </div>
        </>
    )
}