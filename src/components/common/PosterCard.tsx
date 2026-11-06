import RankBadge from "@/app/[locale]/(with-navigation)/ranking/_components/RankBadge";
import { Link } from "@/i18n/navigation";
import { getTitle } from "@/lib/utils";
import { AnimationNode } from "@/types/animation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import StarIcon from "./icons/StarIcon";
export default function PosterCard({ poster, emphasis }: { poster: { node: AnimationNode, ranking?: { rank: number } }, emphasis?: boolean }) {
    const { node } = poster
    const common = useTranslations('common');

    return (
        <>
            <Link
                href={`/details/${node.id}`}
                className="group relative aspect-[2/3] rounded-lg overflow-hidden bg-slate-300 dark:bg-slate-800 block"
            >
                <Image
                    src={node.main_picture.large}
                    alt={node.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 30vw, 18vw"
                />
                {
                    poster.ranking ? <RankBadge rank={poster.ranking.rank} size="lg" /> : null
                }
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1 px-2 text-center">
                    <p
                        className={`text-white ${emphasis ? "text-sm font-bold" : "text-xs font-semibold"}`}
                    >
                        {getTitle(node)}
                    </p>
                    <div className="flex items-center gap-x-1">
                        <StarIcon className={emphasis ? "w-4 h-4" : "w-3.5 h-3.5"} />
                        <p
                            className="text-white text-xs"
                            aria-label={`${common("userRating")}: ${node.mean ?? 0}`}
                        >
                            {node.mean ?? 0}
                        </p>
                    </div>
                </div>
            </Link>
        </>
    )
}