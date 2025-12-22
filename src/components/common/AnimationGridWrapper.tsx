
export default function AnimationGridWrapper({ children }: { children: React.ReactNode }) {


    return (
    <div className="w-full md:max-w-screen-xl grid grid-rows-[repeat(4,minmax(120px,1fr))] md:grid-rows-[repeat(4,minmax(160px,1fr))] grid-cols-[repeat(4,minmax(90px,198px))] gap-2 py-2 px-4 justify-center">
        {children}
    </div>
    )
}