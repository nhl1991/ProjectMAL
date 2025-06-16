
export default function Title({ title, alternative_title} : Readonly<{
    title: string,
    alternative_title: {
        en: string,
        ja: string
    },
}>) {

    return (
        <>
            <div id="title" className="w-full h-full col-span-full row-[1/3] text-center p-2">
                <div className="w-full grid grid-rows-3">
                    <h1 className="w-full text-3xl overflow-scroll text-nowrap">{alternative_title.ja}</h1>
                    <p className="w-full text-xs">{title}</p>
                    <p className="w-full text-xs">{alternative_title.en}</p>
                </div>
            </div>
        </>
    )
}