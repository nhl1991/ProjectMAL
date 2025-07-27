import { related } from "@/lib/types"


export default function RelatedAnimations({related_anime}: Readonly<{
    related_anime: related[] | undefined
    
}>) {


    return (
        <>
            <div className="w-full h-full block">
                <h1 className="w-full text-center text-2xl p-2">관련 작품</h1>
                <div className="w-full h-min overflow-scroll p-2">
                    {
                        related_anime != undefined ?
                        related_anime.map((item: related, i: number) => {
                            return <div key={i} className="block">
                                <p>{item.node.title} - {item.relation_type_formatted}</p>
                            </div>
                        }) : <></>
                    }
                </div>
            </div>
        </>
    )
}