import AnimationPreviewSection from "@/components/common/AnimationPreviewSection";
import { RANKINGTYPE } from "@/lib/variables";
import { setRequestLocale } from "next-intl/server";

export default async function Page({ params }: { params: Promise<{ locale: string }>  }) {
  const locale = (await params).locale;
  setRequestLocale(locale);

  return (
    <>
      <AnimationPreviewSection category="ranking" values={RANKINGTYPE}/>
    </>
  );
}
