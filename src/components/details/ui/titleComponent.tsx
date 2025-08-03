
export default function Title({ title, alternative_title} : Readonly<{
    title: string,
    alternative_title: {
        en: string,
        ja: string
    },
}>) {

    return (
        <>
            <div id="title" className="w-full text-center flex justify-center items-center">
                <div className={`w-full grid grid-rows-2 md:gap-0.5`}>
                    
                    <h1 className="w-full md:text-3xl text-2xl ">{alternative_title.ja}</h1>
                    <p className="w-full text-xs">{title}</p>
                    <p className="w-full text-xs">{alternative_title.en}</p>
                </div>
            </div>
        </>
    )
}