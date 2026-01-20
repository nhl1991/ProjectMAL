import { getAnimations } from "@/lib/fetchAnimation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const response = await getAnimations(
    `anime/${id}?fields=id,title,main_picture,synopsis`,
    `details/${id}`
  ).then((res) => res.json());

  return {
    title: response.title,
    description: response.synopsis,
    openGraph: {
      images: [response.main_picture.large],
    },
  };
}
export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  return <>{children}</>;
}
