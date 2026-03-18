import Link from "next/link";
import { useState } from "react";


export default function NavItem({ pathname, icon }: { pathname: string; icon: React.ReactNode }) {
  const [hover, setHover] = useState(false);
  const label = pathname === "/" ? "HOME" : pathname.replace(/^\/+/, "").toUpperCase();

  return (
    <li
      className="h-max p-1 items-center flex rounded-xl justify-center"
    >
      <Link href={pathname} className="flex flex-col p-1 items-center justify-center ">
        <div className={`w-8 h-8 transition-transform duration-200`}>
          {icon}
        </div>
        <p
          className={`border-b-2 border-transparent transition-colors duration-200 text-xs mt-1`}
        >
          {label}
        </p>
      </Link>
    </li>
  );
}