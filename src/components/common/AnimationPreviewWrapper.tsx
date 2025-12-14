

export default function AnimationPreviewWrapper({children} : {children:React.ReactNode}){


    return(
        <section className="w-max grid grid-rows-[minmax(160px,332px)] grid-cols-[repeat(10,minmax(90px,198px))] gap-2 py-1 px-4 min-h-max">
            {children}
        </section>
    )
}