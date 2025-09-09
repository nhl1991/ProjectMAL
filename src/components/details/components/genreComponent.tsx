

export default function Genres({ genres }: Readonly<{
    genres:{
        id: number,
        name: string
    }[]
}>) {


    return (
        <>
            <div className="flex p-2 flex-wrap gap-1">
                {
                    genres.map((item: { id: number, name: string }, i: number) => {
                        return <p key={i} className="w-max h-min p-1 bg-sky-400 dark:bg-blue-950 text-white rounded text-[clamp(0.7rem,0.5rem+1vw,1rem)]">{item.name}</p>
                    })
                }
            </div>
        </>
    )
}