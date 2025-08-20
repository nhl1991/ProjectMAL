import Image from "next/image";
import NoDataImage from "@/asset/kusuriya-no-hitorigoto-apothecary-diaries.gif";

export default function NoData({
  image,
  message,
}: {
  image: boolean;
  message: string;
}) {
  return (
    <>
      <div className="w-full h-full flex text-center items-center bg-red-300">
        <div className="w-max">
          {image ? (
            <Image
              src={NoDataImage}
              width={400}
              height={400}
              alt="sorry"
              unoptimized
            />
          ) : null}
          <p className="w-full text-4xl font-extrabold p-2">{message}</p>
        </div>
      </div>
    </>
  );
}
