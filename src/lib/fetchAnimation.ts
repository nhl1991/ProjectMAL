export async function getAnimations(query: string, tags: string) {
  const url = new URL(query, `https://api.myanimelist.net/v2/`);
  return await fetch(url, {
    cache: "force-cache",
    next: { revalidate: 3600, tags: [`${tags}`] }, // 1 hour
    headers: {
      "X-MAL-CLIENT-ID": `${process.env.MAL_CLIENT_ID}`,
    },
    method: "GET",
  });
}
