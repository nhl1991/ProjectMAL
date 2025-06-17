'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import PageWrapper from "./ui/PageWrapper";



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
    <PageWrapper>
      <div className="w-full min-h-screen gap-0 grid md:grid-cols-3 md:grid-rows-1 grid-cols-1 grid-rows-3 bg-no-repeat bg-center bg-cover duration-150" style={{
        backgroundImage: `url(${backgroundImage})`,
      }}>
        {
          menu.map((item, i) => {
            return <div key={i} className="text-white bg-black hover:bg-opacity-50 bg-opacity-100  transition-all delay-100">
              <Link href={item === 'ranking' ? `/${item}?offset=0&ranking_type=all&limit=10` : `${item}`}
                className="w-full h-full text-center text-6xl flex items-center"><b className="p-2 w-full">{item.toUpperCase()}</b></Link>
            </div>
          })
        }
      </div>
    </PageWrapper>
  );
}
