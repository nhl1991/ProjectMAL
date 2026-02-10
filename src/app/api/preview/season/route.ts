import { getAnimations } from "@/lib/fetchAnimation";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
    const offset = 0;
    const limit = 10;
    const { searchParams } = req.nextUrl;
    const year = new Date().getFullYear();
    const value = searchParams.get('value');
    const query = `anime/season/${year}/${value}?offset=${offset}&limit=${limit}&sort=anime_num_list_users`;
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