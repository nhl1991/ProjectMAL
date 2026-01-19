export default function DetailHero({
    title,
    alternative_titles
}:{
    title: string,
    alternative_titles: {
        en: string,
        ja: string,
    }
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-y-0.5 px-2 relative">
      <h1 className="text-4xl">{title}</h1>
      {alternative_titles.en ? <h2>{alternative_titles.en}</h2>: null}
      {alternative_titles.ja ? <h2>{alternative_titles.ja}</h2>: null}
    </div>
  );
}
