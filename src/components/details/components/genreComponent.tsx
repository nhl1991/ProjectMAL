

export default function Genres({ genres }: Readonly<{
    genres:{
        id: number,
        name: string
    }[]
}>) {


    return (
        <>
            <div className="flex p-2 flex-wrap">
                {
                    genres.map((item: { id: number, name: string }, i: number) => {
                        return <p key={i} className="w-max h-min p-2 mx-1 bg-gray-800/50 rounded ">{item.name}</p>
                    })
                }
            </div>
        </>
    )
}