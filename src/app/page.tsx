'use client'
import Image from "next/image";
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
    <main className="w-full h-full relative">
      
      <div className="w-full h-full bg-transparent flex flex-col items-center justify-center ">
        <div><h1 className="font-bold text-[clamp(2rem,2rem+1.5vw,3rem)]">PROJECT MAL</h1></div>
      
        <div className="rounded-2xl relative" >
          {backgroundImage && <Image src={backgroundImage} className="bg-center bg-no-repeat object-cover " sizes="100vw" fill priority={true} alt="background-image" />}
          <nav className="gap-0 grid md:grid-cols-3 md:grid-rows-1  backdrop-blur-sm grid-cols-1 grid-rows-3 md:gap-12" >
            {
              menu.map((item, i) => {
                return <div key={i} className="flex items-center md:justify-center rounded-2xl text-white transition-all duration-300 hover:scale-[1.06] hover:bg-gradient-to-br hover:from-fuchsia-500/20 hover:via-emerald-400/20 hover:to-cyan-400/20 dark:text-white">
                  <Link href={`/${item}`}
                    className="h-full p-4  text-center text-[clamp(3rem,3vw+2rem,4.75rem)] flex md:flex-col items-center justify-center">
                    <div className="md:w-24 w-12 ">
                      {item === 'search' ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg> : item === 'ranking' ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                        </svg>
                          : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                      }
                    </div>
                    <div>{item.toUpperCase()}
                    </div>
                  </Link>
                </div>
              })
            }
          </nav>
        </div>
      </div>
    </main>
  );
}