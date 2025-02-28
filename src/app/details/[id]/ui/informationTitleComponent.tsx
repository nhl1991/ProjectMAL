

export default function InformationTitle({children} : Readonly<{ children:React.ReactNode}>){

    return(
        <>
            <p className="p-1">
                {children}
            </p>
        </>
    )
}