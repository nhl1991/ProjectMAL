import { Picture } from "@/types/animation";
import Image from "next/image";
export default function PosterImage({
  title,
  main_picture,
}: {
  title: string;
  main_picture: Picture;
}) {
  return (
    <>
      <figure className="relative md:max-w-64 xl:max-w-72 w-full min-h-96 aspect-[3/4]">
        <Image
          src={main_picture.large ?? main_picture.medium}
          fill
          sizes="(max-width: 768px) 80vw, 50vw"
          className="object-contain"
          alt={`${title} poster`}
          loading="eager"
          priority={true}
        />
      </figure>
    </>
  );
}
