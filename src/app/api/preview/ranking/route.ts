import { getAnimations } from "@/lib/fetchAnimation";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
    const offset = 0;
    const limit = 10;
    const { searchParams } = req.nextUrl;
    const value = searchParams.get('value');
    const query = `anime/ranking?ranking_type=${value}&offset=${offset}&limit=${limit}`;
      const result = await getAnimations(query, "ranking");
    if (result.ok) {
        const data = await result.json();
        return NextResponse.json(data, { status: result.status });
    } else {
        const error = await result.json();
        return NextResponse.json(error, { status: result.status });
    }
}