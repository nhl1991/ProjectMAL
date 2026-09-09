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
    return result;
  }
  else if (response.status === 404) return { data: [] };
  else throw new Error(result.error ?? result.message);
};
