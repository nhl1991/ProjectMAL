import { getAnimations } from "@/lib/fetchAnimation";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
    const { searchParams } = req.nextUrl;
    const value = searchParams.get('value');
    const offset = 0;
    const limit = parseInt(searchParams.get('limit') ?? '10', 10);
    if(!value) return NextResponse.json({ error: 'Bad Request', message: 'Missing required parameter: value' }, { status: 400 });
    const query = `anime/ranking?ranking_type=${value}&offset=${offset}&limit=${limit}&fields=mean,alternative_titles`;
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