import { Genre } from "@/types/animation";

export default function Genres({ genres } : {
    genres : Genre[]
}) {
  return (
    <ul className="flex gap-1.5 flex-wrap">
      {genres.map((g: Genre) => (
        <li key={g.id}>
          <p className="text-xs font-medium text-[#7F77DD] border border-[#7F77DD]/40 rounded-full px-3 py-1 hover:bg-[#7F77DD]/10 transition-colors">
            {g.name}
          </p>
        </li>
      ))}
    </ul>
  );
}
