
import { getAnimations } from "@/lib/fetchAnimation";
import { NextRequest, NextResponse } from "next/server";

const LIMIT = 16;
const RANKINGTYPE = ['all', 'airing', 'upcoming', 'tv', 'ova', 'movie', 'special', 'bypopularity', 'favorite']
export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const type = searchParams.get('ranking_type');
  const offset = searchParams.get('offset') ?? 0;
  if (!RANKINGTYPE.includes(type as string))
    return NextResponse.json({ error: 'Bad Request', message: 'Wrong parameter: ranking.' }, { status: 400 });

  try {
    const query = `anime/ranking?ranking_type=${type}&offset=${offset}&limit=${LIMIT}`;
    const response = await getAnimations(query, "ranking");

    if (response.ok) {
      const data = await response.json();
      return NextResponse.json(data, { status: response.status });
    } else {
      const payload = await response.json();
      const error = payload.error ?? null;
      const message = payload.message ?? null;
      return NextResponse.json({ error, message }, { status: response.status });
    }

  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { message: "Upstream network error" },
      { status: 502 }
    );

  }

}