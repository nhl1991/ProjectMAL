import StarIcon from "@/components/common/icons/StarIcon";
import { useTranslations } from "next-intl";

export default function Rating({ mean }: { mean: number|undefined }) {
  const common = useTranslations('common');
  return (
    <div className="flex items-center gap-x-1">
      <StarIcon className="w-4 h-4" />
      <p aria-label={`${common('userRating')}: ${mean ?? 0}`}>{mean ?? 0}</p>
    </div>
  );
}
