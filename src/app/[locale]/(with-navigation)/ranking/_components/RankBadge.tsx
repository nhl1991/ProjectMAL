
export default function RankBadge({ rank, size }: { rank: number, size: "lg" | "sm" }) {


    if (size === "lg") {
        return (
            <span className={`absolute bottom-1 left-1 text-4xl md:text-8xl font-black leading-none [-webkit-text-stroke:0.2px_white] md:[-webkit-text-stroke:1px_white] text-transparent `}>
                {rank}
            </span>
        )
    }
    return (
        <span className="absolute top-1.5 left-1.5 w-5 h-5 rounded-full bg-black/65 text-white text-[10px] font-bold flex items-center justify-center">
            {rank}
        </span>
    )


}