import loadImage from "@/asset/Ajax_loader_metal_512.gif"
import Image from "next/image"
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-96 h-96">
        <Image src={loadImage} fill className="object-contain" alt="load image" />
      </div>
    </div>
  )
}