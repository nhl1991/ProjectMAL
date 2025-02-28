
export default function AnimationNodeTitle({ title, alternative_title} : Readonly<{
    title: string,
    alternative_title: {
        en: string,
        ja: string
    },
}>) {

    return (
        <>
            <div id="title" className="w-full h-min text-center">
                <div className="w-full">
                    <h1 className="w-full text-xs p-0">{alternative_title.ja}</h1>
                    <p className="w-full text-xs p-1">{title}</p>
                    
                </div>
            </div>
        </>
    )
}