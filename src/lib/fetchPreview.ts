import { AnimationData } from "@/types/animation";
import { normalizeAnimationData } from "@/lib/normalizeAnimationData";

export const fetchPreview = async (params: string): Promise<{ data: AnimationData[] }> => {
  const response = await fetch(`/api/preview/${params}`, {
    method: "GET",
  });
  const result = await response.json();
  if (response.ok) {
    return { data: normalizeAnimationData(result?.data) };
  }
  else if (response.status === 404) return { data: [] };
  else throw new Error(result.error ?? result.message);
};
