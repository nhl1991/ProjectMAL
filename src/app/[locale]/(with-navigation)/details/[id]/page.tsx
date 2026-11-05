import AnimationDetailSection from "@/components/details/AnimationDetailSection";

export default async function Page({
  params,
}: Readonly<{
  params: Promise<{ id: string }>;
}>) {
  const { id } = await params;


  return (
    <>
      <AnimationDetailSection id={id}/>
    </>
  );
}
