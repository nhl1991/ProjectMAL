'use client'
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function ImageWithLink({id, title, image_large, priority }:{id: number, title:string, image_large: string, priority:boolean }) {
    const router = useRouter();

    return (
        <div className="w-full h-full flex justify-end rounded shadow-md relative " onClick={() => router.push(`/details/${id}`)}>
                <Image id={id.toString()} className="rounded-sm md:rounded-xl object-cover" fill sizes="(max-width: 768px, 50vw), 33vw" src={image_large} alt={title} priority={priority}/> 
        </div>
    )
}