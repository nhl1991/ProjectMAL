"use client";
import styles from "./navigation.module.css";
import { HomeIcon, RankingIcon, SearchIcon, SeasonIcon } from "./common/icons";
import NavItem from "./PageNavigationItem";


const iconClassName = "w-full h-full  transition-colors duration-200";

const ROUTES = [
  { pathname: "/", icon: <HomeIcon className={iconClassName} /> },
  { pathname: "/search", icon: <SearchIcon className={iconClassName} /> },
  { pathname: "/ranking", icon: <RankingIcon className={iconClassName} /> },
  { pathname: "/season", icon: <SeasonIcon className={iconClassName} /> },
];

export default function Navigation() {
  return (
    <nav className="flex flex-col justify-between md:justify-center p-0.5">
      <ul id="navigation" className={`${styles.container}`}>
        {ROUTES.map((route, i) => (
          <NavItem key={i} pathname={route.pathname} icon={route.icon} />
        ))}
      </ul>
    </nav>
  );
}
