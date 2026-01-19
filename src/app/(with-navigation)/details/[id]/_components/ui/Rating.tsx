import StarIcon from "@/components/common/icons/StarIcon";

export default function Rating({ mean }: { mean: number|undefined }) {
  return (
    <div className="flex items-center gap-x-1">
      <StarIcon className="w-4 h-4" />
      <p aria-label="user rating">{mean ?? 0}</p>
    </div>
  );
}
