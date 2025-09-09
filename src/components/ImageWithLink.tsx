'use client'
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function ImageWithLink({id, image_large, image_medium, priority }:{id: number, image_large: string, image_medium: string, priority:boolean }) {
    const router = useRouter();

    return (
        <div className="w-full h-full flex justify-end rounded shadow-md relative" onClick={() => router.push(`/details/${id}`)}>
                <Image id={id.toString()} className="rounded-xl object-cover" fill sizes="(max-width: 768px, 50vw), 33vw" src={image_large} alt={image_medium} priority={priority}/> 
        </div>
    )
}