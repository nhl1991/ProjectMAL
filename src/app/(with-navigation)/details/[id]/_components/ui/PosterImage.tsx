import { Picture } from "@/types/animation";
import Image from "next/image";
export default function PosterImage({
  main_picture,
  title,
}: {
  main_picture: Picture;
  title: string;
}) {
  return (
    <>
      <figure className="relative md:max-w-64 xl:max-w-72 w-full min-h-96 aspect-[3/4]">
        <Image
          src={main_picture.large ?? main_picture.medium}
          fill
          sizes="(max-width: 768px) 80vw, 10vw"
          className="object-contain"
          alt={`${title} poster`}
          priority
        />
      </figure>
    </>
  );
}
