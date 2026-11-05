"use client";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function SectionHeader({
  title,
  href,
}: {
  title: string;
  /** 있으면 우측에 "전체 보기" 링크를 표시 */
  href?: string;
}) {
  const common = useTranslations("common");

  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-bold">{title}</h2>
      {href && (
        <Link
          href={href}
          className="text-sm text-muted-foreground hover:underline"
        >
          {common("viewAll")} <span aria-hidden="true">→</span>
        </Link>
      )}
    </div>
  );
}
