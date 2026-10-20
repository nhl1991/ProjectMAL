import { getAnimations } from "@/lib/fetchAnimation";
import { toProxyResponse } from "@/lib/toProxyResponse";
import { SEASONTYPE } from "@/lib/variables";
import { NextRequest, NextResponse } from "next/server";

const OFFSET = 0;
const ALLOWED_LIMITS = [5, 10];
const DEFAULT_LIMIT = 10;
export async function GET(req: NextRequest) {
    const { searchParams } = req.nextUrl;
    const limitParam = Number(searchParams.get('limit') ?? DEFAULT_LIMIT);
    if (!ALLOWED_LIMITS.includes(limitParam))
        return NextResponse.json({ error: 'Bad Request', message: 'Wrong parameter: limit.' }, { status: 400 });
    const year = new Date().getFullYear();
    const type = searchParams.get('value');
    if (!type) return NextResponse.json({ error: 'Bad Request', message: 'Missing required parameter: value' }, { status: 400 });
    if (!SEASONTYPE.includes(type))
        return NextResponse.json({ error: 'Bad Request', message: 'Wrong parameter: season_type.' }, { status: 400 });
    const query = `anime/season/${year}/${type}?offset=${OFFSET}&limit=${limitParam}&sort=anime_num_list_users&fields=mean,alternative_titles`;
    try {
        const response = await getAnimations(query, "season/preview");
        return await toProxyResponse(response);
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: "network_error", message: "Upstream network error" }, { status: 502 });

    }

}