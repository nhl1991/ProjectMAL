'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "./navigation.module.css"
import { useEffect, useState } from "react";



export default function Navigation() {
    const pathname = usePathname();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(
            window.innerWidth < 768)

        return () => setIsClick(false);
    }, [])


    const menu = ['/', 'search', 'ranking', 'season']
    const [isClick, setIsClick] = useState(false);
    const handleOnClick = () => {
        setIsClick(!isClick)
    }


    if (pathname === '/') {
        return <Link href={`/`} className={`${pathname === '/' ? 'text-cyan-300 border-b-cyan-300 ' : 'border-transparent'}`}><b></b></Link>
    }
    else if (!isMobile) {

        return (
            <ul className={`${styles.container} `}>


                {
                    menu.map((item, i) => {
                        return <li key={i} className="h-full p-2 items-center flex border-transparent rounded-sm flex-shrink-0 ">
                            <Link href={item === '/' ? '/' : `/${item}`} className={'p-4' + `${pathname.startsWith(`/${item}`) ? 'text-cyan-300 border-b-cyan-300 ' : 'border-transparent'}`}><b>{item === '/' ? 'HOME' : item.toUpperCase()}</b></Link>
                            {/* <Link href={`/${item}`} className={`${pathname.startsWith(`/${item}`) ? 'text-cyan-300 border-b-cyan-300 ' : 'border-transparent'}`}><b>{item.toUpperCase()}</b></Link> */}
                        </li>
                    })
                }
            </ul>
        )
    } else if (isMobile) {

        return (
            <div className="w-full flex justify-end">
                {isClick ? <button className="p-2" onClick={handleOnClick}>
                    <svg className="w-8" data-slot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button> : <ul className={`${styles.container} `} >
                    {
                        menu.map((item, i) => {
                            return <li key={i} className={` p-2 items-center border-transparent rounded-sm`}>
                                <Link href={item === '/' ? '/' : `/${item}`} className={'p-2' + `${pathname.startsWith(`/${item}`) ? 'text-cyan-300 border-b-cyan-300 ' : 'border-transparent'}`}><b>{item === '/' ? 'HOME' : item.toUpperCase()}</b></Link>
                                {/* <Link href={`/${item}`} className={`${pathname.startsWith(`/${item}`) ? 'text-cyan-300 border-b-cyan-300 ' : 'border-transparent'}`}><b>{item.toUpperCase()}</b></Link> */}
                            </li>
                        })
                    }
                    <li><button className="p-2" onClick={handleOnClick}>
                        <svg className="w-8" data-slot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button></li>
                </ul>}
            </div>
        )
    }
}