import Image from "next/image"
import { MouseEvent, useState } from "react";
import ImageModal from "./ImageModal";
import { useModalStore } from "@/app/lib/stores";

export default function Pictures({ pictures }: Readonly<{
    pictures: {
        medium: string,
        large: string
    }[]
}>) {
    const { modal, setModal } = useModalStore()
    const [ source, setSource ] = useState('');
    const handleOnClick = (e:MouseEvent<HTMLImageElement>) => {
        setSource(e.currentTarget.alt);
        setModal(!modal)
    };

    return (
        <>
            <div className="w-full h-min flex overflow-scroll p-2 border-2 border-transparent my-2 justify-center">
                {
                    pictures?.map((item: { medium: string, large: string }, i: number) => {
                        //console.log(item.large);
                        return <Image key={i}  className="p-1 m-1 flex-shrink-0 shadow-md shadow-slate-400 hover:scale-105" src={item.large} width={180} height={320} alt={item.large} onClick={handleOnClick} />
                    })
                }
                {
                    modal && source != "" && <ImageModal source={source} />
                }
            </div>
        </>
    )
}