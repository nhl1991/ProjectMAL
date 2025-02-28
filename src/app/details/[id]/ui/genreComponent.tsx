

export default function Genres({ genres }: Readonly<{
    genres:{
        id: number,
        name: string
    }[]
}>) {


    return (
        <>
            <div className="w-full h-12 flex p-2">
                {
                    genres.map((item: { id: number, name: string }, i: number) => {
                        return <p key={i} className="w-max h-min p-2 mx-1 bg-slate-100 rounded dark:text-black">{item.name}</p>
                    })
                }
            </div>
        </>
    )
}