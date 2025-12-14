import Navigation from "@/components/PageNavigation";


export default function WithNavigationLayout({ children }: { children: React.ReactNode }) {


    return (
        <>
            <Navigation />
            <div className="md:max-w-5xl w-full rounded-xl flex flex-col gap-y-1 py-12 px-2">
                {children}
            </div>
        </>
    )
}