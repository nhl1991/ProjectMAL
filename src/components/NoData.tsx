import Image from "next/image";
import NoDataImage from "@/asset/kusuriya-no-hitorigoto-apothecary-diaries.gif";

export default function NoData({
  message,
}: {
  message: string;
}) {
  return (
    <>
      <div className="w-full h-full flex text-center items-center bg-red-300">
        <div className="w-max">
          
            <Image
              src={NoDataImage}
              width={400}
              height={400}
              alt="sorry"
              unoptimized
            />
          
          <p className="w-full text-4xl font-extrabold p-2">{message}</p>
        </div>
      </div>
    </>
  );
}
