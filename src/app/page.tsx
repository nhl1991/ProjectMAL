'use client'
import Link from "next/link";
import { useEffect, useState } from "react";



export default function Home() {
  const menu = ['search', 'ranking', 'season']


  const [backgroundImage, setBackgroundImage] = useState<string>('');
  useEffect(() => {
    const images = window.innerWidth >= 1024 ? [
      '/background-1.jpg',
      '/background-2.webp',
      '/background-3.avif',
      '/background-4.avif',
      '/background-5.webp',
      '/background-6.png',
    ] : ['/background-m-1.jpg', '/background-m-2.jpg'];

    const index: number = Math.floor(Math.random() * images.length);
    const selectedImage = images[index];
    setBackgroundImage(selectedImage);


    return () => {
      console.log('Changed.')}

  }, []);
  


  return (
    <div className="w-full h-full p-2 justify-center bg-no-repeat bg-center bg-cover" style={{
      backgroundImage: `url(${backgroundImage})`,
    }}>
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
