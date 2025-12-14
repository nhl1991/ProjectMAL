// app/api/search/route.ts
import { getAnimations } from '@/lib/fetchAnimation';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const offset = searchParams.get('offset') ?? 0
  const q = searchParams.get('q')
  const query = `anime?q=${q}&offset=${offset}&limit=16`;
  const result = await getAnimations(query, "search");

  if (result.ok) {
    const data = await result.json();
    return NextResponse.json(data, { status: result.status });
  } else {
    const error = await result.json();
    return NextResponse.json(error, { status: result.status });
  }
}
