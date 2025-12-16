'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "./navigation.module.css"
import { useState } from "react";
import { HomeIcon, RankingIcon, SearchIcon, SeasonIcon } from "./common/icons";




export default function Navigation() {
    const className = "w-8 h-8  hover:stroke-cyan-400 hover:scale-110 transition-colors duration-200"

    const ROUTES = [{
        pathname: '/',
        component: <HomeIcon className={className} />
    }, {
        pathname: '/search',
        component: <SearchIcon className={className} />
    }, {
        pathname: '/ranking',
        component: <RankingIcon className={className} />
    }, {
        pathname: '/season',
        component: <SeasonIcon className={className} />
    }]

    return (

        <nav className="flex flex-col justify-between md:justify-center p-2 ">
            <ul className={`${styles.container} `}>

                {
                    ROUTES.map((route, i) => {
                        const { pathname,component} = route;
                        return <li key={i} className="h-max p-2 items-center flex">
                            <Link href={pathname} className="flex flex-col items-center justify-center "><div>{component}</div>
                            <p>{pathname === '/' ? 'HOME' : pathname.replace(/^\/+/, "").toUpperCase()}</p></Link>
                        </li>
                    })
                }
            </ul>
        </nav>
    )
}