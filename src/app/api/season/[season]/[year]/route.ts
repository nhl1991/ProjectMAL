// app/api/search/route.ts
import { getAnimations } from '@/lib/fetchAnimation';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, ctx: RouteContext<'/api/season/[season]/[year]'>) {
    const { season, year } = await ctx.params
    const offset = req.nextUrl.searchParams.get('offset');
    const limit = 16;
    const query = `anime/season/${season}/${year}?offset=${offset}&limit=${limit}&sort=anime_num_list_users`
    const result = await getAnimations(query, "season");

    if(result.ok){
      const data = await result.json();
      return NextResponse.json(data, {status: result.status});
    }else{
      const error = await result.json();
      return NextResponse.json(error, {status: result.status});
    }
}
