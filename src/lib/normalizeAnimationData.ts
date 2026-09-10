import { AnimationData } from "@/types/animation";

export function normalizeAnimationData(data: unknown): AnimationData[] {
  if (!Array.isArray(data)) {
    console.error("Unexpected animation list response shape:", data);
    return [];
  }
  const valid = (data as AnimationData[]).filter((item) => item?.node?.id != null);
  if (valid.length !== data.length) {
    console.error("Filtered malformed animation entries:", data);
  }
  return valid.map((item) => ({
    ...item,
    node: {
      ...item.node,
      main_picture: {
        ...item.node.main_picture,
        large: item.node.main_picture?.large || item.node.main_picture?.medium || "/no_poster.png",
      },
    },
  }));
}
