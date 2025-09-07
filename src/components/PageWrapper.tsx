

export default function PageWrapper({children}:{children:React.ReactNode}){


    return(
        <div className="w-full h-full p-2 flex flex-col relative">
            {children}
        </div>
    )
}