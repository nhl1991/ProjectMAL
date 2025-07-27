import { useModalStore } from "@/lib/stores";
import Image from "next/image"
import { useEffect } from "react";

export default function ImageModal({ source }: Readonly<{
    source: string,
}>) {
    const preventOffModal = (e: React.MouseEvent) => {
        e.stopPropagation();
      };
    const {modal, setModal } = useModalStore()

    function handleOnClick(){
        setModal(!modal);
    }
    useEffect(() => {
        // when modal is on, set body's overflow property to hidden.
        document.body.style.overflow = 'hidden';
        // when modal is gone, set body's overflow property to auto again.
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, []);

    return (
        <>
            <div
                id="outer-modal"
                onClick={handleOnClick}
                className="fixed inset-0 flex justify-center items-center w-full h-full bg-gray-500/50 z-50"
            >
                <div
                    id="inner-modal"
                    onClick={preventOffModal}
                    className="min-w-[90vw] min-h-[90vh] relative m-24 bg-black/30 rounded-md p-2 overflow-scroll"
                >
                    <Image src={source} className="object-contain p-2" fill alt="Image not found."/>
                </div>
            </div>
        </>
    )
}