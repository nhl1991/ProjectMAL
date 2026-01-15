import { Genre } from "@/types/animation";

export default function Genres({ genres } : {
    genres : Genre[]
}) {
  return (
    <div>
      <ul className="flex gap-x-2 py-2 flex-wrap gap-y-2 px-8">
        {genres.map((g: Genre) => (
          <li
            className="rounded-xl bg-sky-400 dark:bg-indigo-700 text-white px-3 py-1"
            key={g.id}
          >
            <p key={g.name}>{g.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
