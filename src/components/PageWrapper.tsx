

export default function PageWrapper({children}:{children:React.ReactNode}){


    return(
        <div className="w-full h-full overflow-scroll">
            {children}
        </div>
    )
}