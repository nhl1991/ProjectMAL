import { Fetch } from "@/lib/fetch";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
    const { searchParams } = req.nextUrl;

    const offset = searchParams.get('offset');
    const limit = searchParams.get('limit');
    const ranking_type = searchParams.get('ranking_type');

    const result = await Fetch(`/ranking?ranking_type=${ranking_type}&limit=${limit}&offset=${offset}`);

    return NextResponse.json(result);

}