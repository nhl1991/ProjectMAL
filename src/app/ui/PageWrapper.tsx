

export default function PageWrapper({children}:{children:React.ReactNode}){


    return(
        <div className="w-full h-full col-span-full row-[3/-1] grid-cols-1 md:items-center md:justify-center">
            {children}
        </div>
    )
}