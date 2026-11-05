import { getAnimations } from "@/lib/fetchAnimation";
import { pickImage } from "@/lib/normalizeAnimationDetails";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const common = await getTranslations('common');
  const response = await getAnimations(
    `anime/${id}?fields=id,title,main_picture,synopsis`,
    `details/${id}`,
  );
  if (response.ok) {
    const { title, synopsis, main_picture } = await response.json();
    const image = pickImage(main_picture);
    return {
      title: title,
      description: synopsis.split("\n")[0],
      openGraph: {
        ...(image && { images: [image] }),
      },
    };
  }
  return {
    title: common('notFound'),
    description: common('noResults.detail'),
  };
}
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
