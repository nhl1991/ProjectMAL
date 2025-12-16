'use client'
import { useEffect, useState } from "react";
import Image from "next/image";

const BACKGROUNDS = [
    "/background-1.jpg",
    "/background-2.webp",
    "/background-3.avif",
    "/background-4.avif",
    "/background-5.webp",
    "/background-6.png",
];
export default function HomeHero({ onComplete }: {
    onComplete: () => void;
}) {
    const [backgroundImage, setBackgroundImage] = useState<string>("");
    useEffect(() => {
        const index: number = Math.floor(Math.random() * BACKGROUNDS.length);
        const selectedImage = BACKGROUNDS[index];
        setBackgroundImage(selectedImage);
        return () => { };
    }, []);
    return (
        <>
            <h1 className="md:text-8xl text-5xl py-4">PROJECT MAL</h1>
            <figure className="w-full relative h-48 ">
                <div className="w-full h-full absolute backdrop-blur-sm z-10 flex items-center justify-center rounded-xl">
                    <p className="md:text-7xl text-4xl text-white font-bold app-title">Discover New Anime</p>
                </div>
                {backgroundImage ? <Image src={backgroundImage} sizes="(max-width: 768px)50vw, 33vw" fill className="object-cover md:rounded-2xl" priority alt="background-image" onLoadingComplete={onComplete} /> : null}
            </figure>
        </>
    )
}