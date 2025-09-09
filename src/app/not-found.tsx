import Image from "next/image"
import NoDataImage from "@/asset/kusuriya-no-hitorigoto-apothecary-diaries.gif"
import Link from "next/link"

export default function NotFound() {


    return (
        <>
            <div className="w-full h-full py-24 flex text-center flex-col items-center justify-center">
                <Image src={NoDataImage} width={200} height={200} alt="sorry" />
                <div className="flex justify-center items-center">
                    <p className="w-full text-[2rem] font-extrabold p-2">Page does not exist..</p>
                    <Link href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 hover:stroke-cyan-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                    </Link>
                </div>
            </div>

        </>
    )
}