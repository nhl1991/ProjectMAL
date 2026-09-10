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
    const data: AnimationData[] = result.data.filter(
      (item: { node?: { id?: number; main_picture?: { large?: string } } }) =>
        item?.node?.id != null && !!item?.node?.main_picture?.large
    );
    if (data.length !== result.data.length) {
      console.error("Filtered malformed /api/preview entries:", result.data);
    }
    return { data };
  }
  else if (response.status === 404) return { data: [] };
  else throw new Error(result.error ?? result.message);
};
