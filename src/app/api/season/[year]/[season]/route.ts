import { getAnimations } from '@/lib/fetchAnimation';
import { toProxyResponse } from '@/lib/toProxyResponse';
import { parseOffset } from '@/lib/validator';
import { SEASONTYPE } from '@/lib/variables';
import { NextRequest, NextResponse } from 'next/server';

const LIMIT = 20;
export async function GET(req: NextRequest, { params }: { params: Promise<{ year: string; season: string }> }) {

    const { year, season } = await params

    if (!/^\d{4}$/.test(year))
        return NextResponse.json({ error: 'Bad Request', message: 'Wrong parameter: year.' }, { status: 400 });
    if (!SEASONTYPE.includes(season))
        return NextResponse.json({ error: 'Bad Request', message: 'Wrong parameter: season.' }, { status: 400 });

    const { searchParams } = req.nextUrl;
    const offset = parseOffset(searchParams.get('offset'), LIMIT);
    if (offset === null)
        return NextResponse.json({ error: 'Bad Request', message: 'Wrong parameter: offset.' }, { status: 400 });

    const query = `anime/season/${year}/${season}?offset=${offset}&limit=${LIMIT}&sort=anime_num_list_users&fields=mean,alternative_titles`
    try {
        const response = await getAnimations(query, "season");
        return await toProxyResponse(response);
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: "network_error", message: "Upstream network error" }, { status: 502 });
    }
}
