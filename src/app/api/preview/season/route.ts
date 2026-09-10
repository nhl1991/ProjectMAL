import { getAnimations } from "@/lib/fetchAnimation";
import { NextRequest, NextResponse } from "next/server";

const MAX_LIMIT = 100;

export async function GET(req: NextRequest) {
    const offset = 0;
    const { searchParams } = req.nextUrl;
    const limitParam = searchParams.get('limit');
    const limit = limitParam === null ? 10 : parseInt(limitParam, 10);
    const year = new Date().getFullYear();
    const value = searchParams.get('value');
    if (!value) return NextResponse.json({ error: 'Bad Request', message: 'Missing required parameter: value' }, { status: 400 });
    if (!Number.isInteger(limit) || limit < 1 || limit > MAX_LIMIT) {
        return NextResponse.json({ error: 'Bad Request', message: 'Invalid parameter: limit' }, { status: 400 });
    }
    const query = `anime/season/${year}/${value}?offset=${offset}&limit=${limit}&sort=anime_num_list_users&fields=mean,alternative_titles`;
    try {
        const response = await getAnimations(query, "ranking");

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