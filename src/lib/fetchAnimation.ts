export async function getAnimations(query: string, tags: string) {
  const url = new URL(query, `https://api.myanimelist.net/v2/`);
  // console.log('Fetching : ',url.href);
  try {
      return await fetch(url, {
      cache: "force-cache",
      next: { revalidate: 21600, tags: [`${tags}`] },
      headers: {
        // "X-MAL-CLIENT-ID": `${process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_MAL_CLIENT_ID : process.env.MAL_CLIENT_ID}`
        "X-MAL-CLIENT-ID": `${
          process.env.NODE_ENV === "production"
            ? process.env.NEXT_PUBLIC_MAL_CLIENT_ID
            : process.env.MAL_CLIENT_ID
        }`,
      },
      method: "GET",
    });


    

  } catch (err) {
    throw new Error("API failed");

  }
}
