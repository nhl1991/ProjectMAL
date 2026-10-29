import { normalizeAnimationData } from "./normalizeAnimationData";
const NO_POSTER = "/no_poster.png";

type RawPicture = { medium?: string; large?: string };
export const pickImage = (p?: RawPicture) => p?.large || p?.medium;

export function normalizeAnimationDetails<
  T extends {
    main_picture?: RawPicture;
    pictures?: RawPicture[];
    recommendations?: unknown;
  },
>(data: T) {
  return {
    ...data,
    main_picture: {
      ...data.main_picture,
      large: pickImage(data.main_picture) || NO_POSTER,
    },
    pictures: (data.pictures ?? [])
      .map(pickImage)
      .filter((url): url is string => !!url)
      .map((url) => ({ large: url })),
    recommendations: normalizeAnimationData(data.recommendations ?? []),
  };
}
