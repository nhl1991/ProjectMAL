'use client'
import Image from "next/image";

export default function HomeHero() {
    return (
        <>
            <h1 className="md:text-8xl text-5xl py-4">PROJECT MAL</h1>
            <figure className="w-full relative h-48 ">
                <div className="w-full h-full absolute backdrop-blur-sm z-10 flex items-center justify-center rounded-xl">
                    <p className="md:text-7xl text-4xl text-white font-bold app-title">Discover New Anime</p>
                </div>
                <Image src={'/lp-background.jpg'} sizes="(max-width: 768px)50vw, 25vw" quality={50} fill className="object-cover md:rounded-2xl" priority fetchPriority="high" alt="background-image" />
            </figure>
        </>
    )
}