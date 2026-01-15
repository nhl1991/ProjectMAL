"use client";
import Image from "next/image";
import Link from "next/link";

export default function AnimationImageCard({ src }: { src: string }) {

  return (
    <Link href={src} className="place-content-center place-items-center" target="_blank">
      <figure
        className="relative md:w-48 md:h-64 w-full h-32 overflow-hidden rounded-xl"
      >
        <Image
          src={src}
          fill
          className="object-cover z-10 absolute aspect-[9/16]"
          sizes="(max-width: 768px) 33vw, 10vw"
          alt={"Image"}
          priority
        />
      </figure>
    </Link>
  );
}
