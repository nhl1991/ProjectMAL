'use client'
import Link from "next/link";



export default function Home() {
  const menu = ['search', 'ranking', 'season']


  return (
    <div className="w-full h-full p-2 justify-center custom-bg-img">
      <div className="w-full h-full items-center  lg:flex-row flex-col flex justify-center p-2">
        {
          menu.map((item, i) => {

            return <div key={i} className="w-full h-min lg:w-1/4 lg:h-2/3 p-2 items-center block lg:flex text-white  border-black lg:border-black rounded-sm flex-shrink-0">
              <Link href={`/${item}`} className="w-full h-full text-3xl lg:text-4xl text-center  border-2 border-transparent rounded-xl bg-black bg-opacity-50 hover:border-cyan-200 flex items-center"><b className="p-2 w-full">{item.toUpperCase()}</b></Link>
            </div>
          })
        }

      </div>
    </div>
  );
}
