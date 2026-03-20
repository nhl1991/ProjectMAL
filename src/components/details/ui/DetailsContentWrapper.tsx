
export default function DetailsContentWrapper({
    children,
}: { children: React.ReactNode; }) {
    return (

        <div className="w-full md:max-w-3xl py-12">
            {children}
        </div>
    )
}