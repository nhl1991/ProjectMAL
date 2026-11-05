import { formatRating, formatStatus } from "@/lib/utils";
import { useTranslations } from "next-intl";

type Studio = { id: number; name: string };
type StartSeason = { year: number; season: string };

export default function DetailInfoGrid({
  status,
  studios,
  start_season,
  rating,
}: {
  status?: string;
  studios?: Studio[];
  start_season?: StartSeason;
  rating?: string;
}) {
  const t = useTranslations('detail.information');
  const season = useTranslations('season');
  const items = [
    { label: t('status'), value: status ? formatStatus(status) : null },
    { label: t('studio'), value: studios?.[0]?.name ?? null },
    { label: t('startSeason'), value: start_season ? `${season(`types.${start_season.season}`)} ${start_season.year}` : null },
    { label: t('rating'), value: rating ? formatRating(rating) : null },
  ].filter((item) => item.value)

  if (items.length === 0) return null

  return (
    <div className="grid grid-cols-2 gap-2">
      {items.map((item) => (
        <div key={item.label} className="bg-muted rounded-md p-2">
          <p className="text-[10px] text-muted-foreground mb-0.5">{item.label}</p>
          <p className="text-xs">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
