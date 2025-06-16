

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
                        return <p key={i} className="w-max h-min p-2 mx-1 bg-gray-800/50 rounded ">{item.name}</p>
                    })
                }
            </div>
        </>
    )
}