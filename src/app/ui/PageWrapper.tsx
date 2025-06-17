

export default function PageWrapper({children}:{children:React.ReactNode}){


    return(
        <div className="row-[4/-1] grid-cols-1 grid-rows-12 md:items-center md:justify-center overflow-scroll">
            {children}
        </div>
    )
}