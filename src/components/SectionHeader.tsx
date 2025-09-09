export default function SectionHeader({ children }: { children: string }) {

    return (
        <>
            <h1 className="text-[clamp(2rem,2rem+1vw,3rem)] fill-transparent bg-clip-text text-transparent bg-gradient-to-t from-white via-sky-500 to-indigo-500">{children}</h1>
        </>
    )
}