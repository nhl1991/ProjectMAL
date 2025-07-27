// app/api/search/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get('q');
  const redirectUrl = new URL('/result', req.url); // ✅ 절대경로 생성
  if (q){
    redirectUrl.searchParams.set('q', q);

  };

  return NextResponse.redirect(redirectUrl);
}
