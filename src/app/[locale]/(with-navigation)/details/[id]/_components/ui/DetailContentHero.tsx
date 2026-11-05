export default function DetailsContentHero({
    children,
}: { children: React.ReactNode; }) {
    return (
        <h2 className="text-sm font-medium mb-2.5">
            {children}
        </h2>
    )
}
