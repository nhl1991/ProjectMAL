import Image from "next/image"
import { MouseEvent, useState } from "react";
import ImageModal from "./ImageModal";
import { useModalStore } from "@/app/lib/stores";
import { picture } from "@/app/lib/types";
type pictures = picture[] | undefined

export default function Pictures({ pictures }: { pictures : pictures}) {
    const { modal, setModal } = useModalStore()
    const [ source, setSource ] = useState('');
    const handleOnClick = (e:MouseEvent<HTMLImageElement>) => {
        setSource(e.currentTarget.alt);
        setModal(!modal)
    };

    return (
        <>
            <div className="w-full h-min flex overflow-scroll p-2 border-2 border-transparent my-2">
                {
                    pictures != undefined ?
                    pictures.map((item: { medium: string, large: string }, i: number) => {

                        return <Image key={i}  className="p-1 m-1 flex-shrink-0 shadow-md shadow-slate-400 hover:scale-105" src={item.large} width={180} height={320} alt={item.large} onClick={handleOnClick} />
                    }) : <></>
                }
                {
                    modal && source != "" && <ImageModal source={source} />
                }
            </div>
        </>
    )
}