export default function Title({
  title,
  alternative_title,
}: Readonly<{
  title: string;
  alternative_title: {
    en: string;
    ja: string;
  };
}>) {
  return (
    <>
      <header
        id="title"
        className="w-full text-center flex justify-center items-center"
      >
        <div className={`w-full grid grid-rows-2 md:gap-1.5`}>
          <h1 className="w-full md:text-3xl text-2xl ">{title}</h1>
          {alternative_title ? (
            <>
              <h2 className="w-full text-sm">
                {alternative_title.ja ? alternative_title.ja : null}
              </h2>
              <h3 className="w-full text-xs">
                {alternative_title.en ? alternative_title.en : null}
              </h3>
            </>
          ) : null}
        </div>
      </header>
    </>
  );
}
