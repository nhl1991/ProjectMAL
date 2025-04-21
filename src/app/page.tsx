'use client'
import Link from "next/link";
import { useEffect, useState } from "react";



export default function Home() {
  const menu = ['search', 'ranking', 'season']


  const [backgroundImage, setBackgroundImage] = useState<string>('');
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {

    if (window.innerWidth < 1024)
      setIsMobile(true);
    else
      setIsMobile(false);

    const images = isMobile ? ['/background-m-1.jpg', '/background-m-2.jpg'] : [
      '/background-1.jpg',
      '/background-2.webp',
      '/background-3.avif',
      '/background-4.avif',
      '/background-5.webp',
      '/background-6.png',
    ];

    const index: number = Math.floor(Math.random() * images.length);
    const selectedImage = images[index];
    setBackgroundImage(selectedImage);

    return () => {


    };

  }, [isMobile]);



  return (
    <div className="w-full h-full p-2 justify-center bg-no-repeat bg-center bg-cover" style={{
      backgroundImage: `url(${backgroundImage})`,
    }}>

<div className="p-2 fixed right-2">
          <div className={`w-4 h-4 rounded-full  ${process.env.NODE_ENV === 'production' ? 'bg-green-400' : 'bg-amber-400'}`}>
            {isMobile ? 'M' : 'P' }
          </div>
        </div>
      <div className="w-full h-full items-center  md:flex-row flex-col flex justify-center p-2">
        {
          menu.map((item, i) => {
            return <div key={i} className="w-full h-min md:w-1/4 md:h-2/3 p-2 items-center block md:flex text-white  border-black md:border-black rounded-sm flex-shrink-0">
              <Link href={`/${item}`} className="w-full h-full text-3xl md:text-4xl text-center  border-2 border-transparent rounded-xl bg-black bg-opacity-50 hover:border-cyan-200 flex items-center"><b className="p-2 w-full">{item.toUpperCase()}</b></Link>
            </div>
          })
        }

      </div>
    </div>
  );
}
