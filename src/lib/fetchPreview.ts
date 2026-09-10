import { AnimationData } from "@/types/animation";

export const fetchPreview = async (params: string): Promise<{ data: AnimationData[] }> => {
  const response = await fetch(`/api/preview/${params}`, {
    method: "GET",
  });
  const result = await response.json();
  if (response.ok) {
    if (!Array.isArray(result?.data)) {
      console.error("Unexpected /api/preview response shape:", result);
      return { data: [] };
    }
    const valid = result.data.filter(
      (item: AnimationData) => item?.node?.id != null
    );
    if (valid.length !== result.data.length) {
      console.error("Filtered malformed /api/preview entries:", result.data);
    }
    const data: AnimationData[] = valid.map((item: AnimationData) => ({
      ...item,
      node: {
        ...item.node,
        main_picture: {
          ...item.node.main_picture,
          large: item.node.main_picture?.large || item.node.main_picture?.medium || "/no_poster.png",
        },
      },
    }));
    return { data };
  }
  else if (response.status === 404) return { data: [] };
  else throw new Error(result.error ?? result.message);
};
