import Image from "next/image"
import NoDataImage from "@/asset/kusuriya-no-hitorigoto-apothecary-diaries.gif"

export default function NotFound() {


    return (
        <>
            <div className="w-full h-full py-24 flex text-center flex-col items-center">
                <Image src={NoDataImage} width={200} height={200} alt="sorry" unoptimized />
                <p className="w-full text-xl font-extrabold p-2">Page does not exist.</p>
            </div>

        </>
    )
}