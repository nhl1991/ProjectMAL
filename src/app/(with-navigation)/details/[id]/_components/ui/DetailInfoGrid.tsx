import { formatRating, formatStatus } from "@/lib/utils";

type Studio = { id: number; name: string };
type StartSeason = { year: number; season: string };

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

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
  const items = [
    { label: "방영 상태", value: status ? formatStatus(status) : null },
    { label: "스튜디오", value: studios?.[0]?.name ?? null },
    { label: "방영 시즌", value: start_season ? `${capitalize(start_season.season)} ${start_season.year}` : null },
    { label: "등급", value: rating ? formatRating(rating) : null },
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
