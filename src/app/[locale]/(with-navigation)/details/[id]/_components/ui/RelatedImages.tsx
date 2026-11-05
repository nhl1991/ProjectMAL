import Image from "next/image";
import { Link } from "@/i18n/navigation";
import DetailsContentWrapper from "@/components/details/ui/DetailsContentWrapper";
import { Picture } from "@/types/animation";
import DetailsContentHero from "./DetailContentHero";
import { useTranslations } from "next-intl";

export default function RelatedImages({ pictures }: { pictures: Picture[] }) {
  const t = useTranslations('detail.relatedImages');
  return (
    <DetailsContentWrapper>
      <DetailsContentHero>{t('title')}</DetailsContentHero>
      <div className="grid grid-cols-5 gap-2">
        {pictures.map((p: Picture, idx: number) => (
          <Link
            key={idx}
            href={p.large}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('ariaLabel', { index: idx + 1 })}
            className="relative aspect-[3/4] rounded-md overflow-hidden bg-slate-300 dark:bg-slate-800"
          >
            <Image
              src={p.large}
              alt={t('alt', { index: idx + 1 })}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 20vw, 12vw"
              loading="lazy"
            />
          </Link>
        ))}
      </div>
    </DetailsContentWrapper>
  );
}
