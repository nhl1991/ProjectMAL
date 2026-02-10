// app/api/search/route.ts
import { getAnimations } from '@/lib/fetchAnimation';
import { NextRequest, NextResponse } from 'next/server';

const LIMIT = 16;
const SEASON = ['winter', 'spring', 'summer', 'fall'];
export async function GET(req: NextRequest, ctx: RouteContext<'/api/season/[season]/[year]'>) {
  const { season, year } = await ctx.params
  const offset = req.nextUrl.searchParams.get('offset') ?? 0;
  const query = `anime/season/${season}/${year}?offset=${offset}&limit=${LIMIT}&sort=anime_num_list_users`
  if (!season) return NextResponse.json({ error: 'Bad Request', message: 'Missing required parameter: season' }, { status: 400 });
  if(!SEASON.includes(season as string)) return NextResponse.json({ error: 'Bad Request', message: 'Wrong parameter: season.' }, { status: 400 });
  if (!year) return NextResponse.json({ error: 'Bad Request', message: 'Missing required parameter: year' }, { status: 400 });
  try {
    const response = await getAnimations(query, "season");

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
