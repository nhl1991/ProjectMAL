'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"


export default function Navigation() {
    const pathname = usePathname();


    const menu = ['/', 'search', 'ranking', 'season']


    if (pathname === '/') { 
        return <></>
        // return <Link href={`/`} className={`${pathname === '/' ? 'text-cyan-300 border-b-cyan-300 ' : 'border-transparent'}`}><b></b></Link>
    }
    else {
        return (
            <div className="w-full h-12 flex p-2 text-xl">


                {
                    menu.map((item, i) => {
                        return <div key={i} className="h-full p-2 items-center flex border-transparent rounded-sm flex-shrink-0">
                            <Link href={item === '/' ? '/':`/${item}`} className={'p-4'+`${pathname.startsWith(`/${item}`) ? 'text-cyan-300 border-b-cyan-300 ' : 'border-transparent'}`}><b>{item === '/' ? 'HOME':item.toUpperCase()}</b></Link>
                            {/* <Link href={`/${item}`} className={`${pathname.startsWith(`/${item}`) ? 'text-cyan-300 border-b-cyan-300 ' : 'border-transparent'}`}><b>{item.toUpperCase()}</b></Link> */}
                        </div>
                    })
                }
                <div className="p-2 fixed right-2">
                            <div className={`w-4 h-4 rounded-full bg-slate-600 ${process.env.NODE_ENV === 'production' ? 'bg-green-400' : 'bg-amber-400'}`}></div>
                        </div>
            </div>
        )
    }
}