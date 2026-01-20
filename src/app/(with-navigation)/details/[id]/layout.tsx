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
  );
  if (response.ok) {
    const { title, synopsis, main_picture } = await response.json();
    console.log("그레이토다제.");
    return {
      title: title,
      description: synopsis.split("\n")[0],
      openGraph: {
        images: [main_picture.large],
      },
    };
  }
  return {
    title: "Error",
    description: "Not Found Error.",
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
