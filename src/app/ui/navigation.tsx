'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "./navigation.module.css"
import { useEffect, useState } from "react";


export default function Navigation() {
    const pathname = usePathname();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(()=>{
        setIsMobile(
            window.innerWidth < 768)

    },[])


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
            <ul className={`${styles.container}`}>


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
            <div className="w-full flex justify-end sticky">
                {isClick ? <button className="p-2" onClick={handleOnClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                        <path d="M2.75 7.25h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5zM2.75 11.25h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5zM2.75 15.25h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5z" />
                    </svg>
                </button> : <ul className="flex  h-max" >
                    {
                        menu.map((item, i) => {
                            return <li key={i} className={` p-2 items-center border-transparent rounded-sm`}>
                                <Link href={item === '/' ? '/' : `/${item}`} className={'p-4' + `${pathname.startsWith(`/${item}`) ? 'text-cyan-300 border-b-cyan-300 ' : 'border-transparent'}`}><b>{item === '/' ? 'HOME' : item.toUpperCase()}</b></Link>
                                {/* <Link href={`/${item}`} className={`${pathname.startsWith(`/${item}`) ? 'text-cyan-300 border-b-cyan-300 ' : 'border-transparent'}`}><b>{item.toUpperCase()}</b></Link> */}
                            </li>
                        })
                    }
                    <li><button onClick={handleOnClick}>X</button></li>
                </ul>}
            </div>
        )
    }
}