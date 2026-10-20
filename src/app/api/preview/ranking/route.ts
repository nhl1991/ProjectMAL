import { getAnimations } from "@/lib/fetchAnimation";
import { toProxyResponse } from "@/lib/toProxyResponse";
import { RANKINGTYPE } from "@/lib/variables";
import { NextRequest, NextResponse } from "next/server";
const OFFSET = 0;
const ALLOWED_LIMITS = [5, 10];
const DEFAULT_LIMIT = 10;
export async function GET(req: NextRequest) {
    const { searchParams } = req.nextUrl;
    const type = searchParams.get('value');
    const limitParam = Number(searchParams.get('limit') ?? DEFAULT_LIMIT);
    if (!ALLOWED_LIMITS.includes(limitParam))
        return NextResponse.json({ error: 'Bad Request', message: 'Wrong parameter: limit.' }, { status: 400 });
    if (!type) return NextResponse.json({ error: 'Bad Request', message: 'Missing required parameter: value' }, { status: 400 });
    if (!RANKINGTYPE.includes(type))
        return NextResponse.json({ error: 'Bad Request', message: 'Wrong parameter: ranking_type.' }, { status: 400 });
    const query = `anime/ranking?ranking_type=${type}&offset=${OFFSET}&limit=${limitParam}&fields=mean,alternative_titles`;
    try {
        const response = await getAnimations(query, "ranking/preview");
        return await toProxyResponse(response);
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: "network_error", message: "Upstream network error" }, { status: 502 });

    }
}