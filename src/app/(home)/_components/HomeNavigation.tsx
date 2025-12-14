import { HomeIcon, RankingIcon, SearchIcon, SeasonIcon } from "@/components/common/icons"
import Link from "next/link"


export default function HomeNavigation() {
  const className = "md:w-24 w-12   hover:scale-110 duration-200"
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
        <ul className="flex justify-center gap-x-4 md:gap-x-12 ">

            {
                ROUTES.map((r) => <li className=" h-full flex items-center" key={r.pathname}>
                    <Link className="flex flex-col items-center justify-center py-2 px-4 rounded-xl app-link dark:text-white" href={r.pathname}>
                        {r.component}
                        <p>{r.pathname === '/' ? 'HOME' : r.pathname.replace(/^\/+/, "").toUpperCase()}</p>
                    </Link>
                </li>)
            }
        </ul>
    )
}