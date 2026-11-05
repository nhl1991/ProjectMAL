import Rating from "./Rating";
import { useTranslations } from "next-intl";

export default function DetailHero({
    title,
    alternative_titles,
    mean,
    media_type,
    num_episodes,
    start_season,
}: {
    title: string,
    alternative_titles: {
        en: string,
        ja: string,
    },
    mean?: number,
    media_type?: string,
    num_episodes?: number,
    start_season?: { year: number, season: string },
}) {
  const t = useTranslations('detail');
  return (
    <div className="flex flex-col gap-y-1.5 px-2">
      {alternative_titles.ja ? <p className="text-xs text-muted-foreground">{alternative_titles.ja}</p> : null}
      <h1 className="text-xl md:text-3xl font-medium">{title}</h1>
      <div className="flex items-center gap-x-1.5 text-sm text-muted-foreground">
        <Rating mean={mean} />
        {media_type || num_episodes || start_season ? (
          <span>
            · {media_type ? media_type.toUpperCase() : null}
            {num_episodes ? ` · ${t('episodes', { count: num_episodes })}` : null}
            {start_season?.year ? ` · ${start_season.year}` : null}
          </span>
        ) : null}
      </div>
    </div>
  );
}
