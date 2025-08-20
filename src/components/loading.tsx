import loadImage from "@/asset/Ajax_loader_metal_512.gif"
import Image from "next/image"
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-48 h-48 relative">
        <Image src={loadImage} fill className="object-contain" sizes="(max-width: 768px, 100vw), 33vw" alt="load image" />
      </div>
    </div>
  )
}