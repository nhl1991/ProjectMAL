import { Fetch } from "@/lib/fetch";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req:NextRequest){
    const { searchParams, pathname } = req.nextUrl;
    const limit = searchParams.get('limit');
    const offset = searchParams.get('offset');
    const season = pathname.split('/')[4]
    const year = pathname.split('/')[3]
    console.log(season,year)

    const result = await Fetch(`season/${year}/${season}?offset=${offset}&limit=${limit}&sort=anime_num_list_users`);
    console.log(result);
    return NextResponse.json(result);

}