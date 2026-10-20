// app/api/search/route.ts
import { getAnimations } from '@/lib/fetchAnimation';
import { toProxyResponse } from '@/lib/toProxyResponse';
import { parseOffset } from '@/lib/validator';
import { NextRequest, NextResponse } from 'next/server';

const LIMIT = 20;
export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const offset = parseOffset(searchParams.get('offset'), LIMIT);
  if (offset === null)
    return NextResponse.json({ error: 'Bad Request', message: 'Wrong parameter: offset.' }, { status: 400 });

  const q = searchParams.get('q')?.trim();
  if (!q) return NextResponse.json({ error: 'Bad Request', message: 'Missing required parameter: q' }, { status: 400 });
  const encodedQuery = encodeURIComponent(q);
  const query = `anime?q=${encodedQuery}&offset=${offset}&limit=${LIMIT}&fields=mean,alternative_titles`;
  try {
    const response = await getAnimations(query, "search");
    return await toProxyResponse(response);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "network_error", message: "Upstream network error" }, { status: 502 });
  }
}
