import Image from "next/image"
import { MouseEvent, useState } from "react";
import ImageModal from "./ImageModal";
import { useModalStore } from "@/lib/stores";
import { picture } from "@/lib/types";
type pictures = picture[] | undefined

export default function Pictures({ pictures }: { pictures: pictures }) {
    const { modal, setModal } = useModalStore()
    const [source, setSource] = useState('');
    const handleOnClick = (e: MouseEvent<HTMLImageElement>) => {
        setSource(e.currentTarget.alt);
        setModal(!modal)
    };

    return (
        <div className="w-full h-full p-1 ">
            <div className="w-max h-full gap-2 grid grid-cols-[repeat(4,min(100px))] grid-rows-2 grid-flow-col auto-cols-[min(100px)] p-2">
                {
                    pictures != undefined ?
                        pictures.map((item: { medium: string, large: string }, i: number) => {

                            return <figure key={i} className="w-full h-full relative">
                                <Image key={i} className="object-cover hover:scale-105" src={item.large} fill sizes="(max-width:768px) 100vw, 33vw" alt={item.large} priority={ i < 2 ? true: false} onClick={handleOnClick} />
                            </figure>
                        }) : <></>
                }
                {
                    modal && source != "" && <ImageModal source={source} />
                }
            </div>
        </div>
    )
}