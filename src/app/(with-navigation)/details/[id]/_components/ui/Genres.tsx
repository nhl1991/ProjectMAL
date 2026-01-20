import { Genre } from "@/types/animation";

export default function Genres({ genres } : {
    genres : Genre[]
}) {
  return (
    <div>
      {/* <h2 className="w-full text-center font-bold py-1 text-2xl px-3 rounded-xl">Genres</h2> */}
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
