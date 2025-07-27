import Image from "next/image"
import NoDataImage from "@/asset/kusuriya-no-hitorigoto-apothecary-diaries.gif"

export default function NoData() {


    return (
        <>
            <div className="col-span-full row-span-full py-24 flex text-center flex-col items-center">
                <Image src={NoDataImage} width={400} height={400} alt="sorry" unoptimized />
                <p className="w-full text-4xl font-extrabold p-2">Animations are not exist.</p>
            </div>

        </>
    )
}