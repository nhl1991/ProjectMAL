
import { getAnimations } from "@/lib/fetchAnimation";
import { toProxyResponse } from "@/lib/toProxyResponse";
import { parseOffset } from "@/lib/validator";
import { RANKINGTYPE } from "@/lib/variables";
import { NextRequest, NextResponse } from "next/server";

const LIMIT = 20;
export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const type = searchParams.get('ranking_type');
  const offset = parseOffset(searchParams.get('offset'), LIMIT);
  if (offset === null)
    return NextResponse.json({ error: 'Bad Request', message: 'Wrong parameter: offset.' }, { status: 400 });

  if (!RANKINGTYPE.includes(type as string))
    return NextResponse.json({ error: 'Bad Request', message: 'Wrong parameter: ranking_type.' }, { status: 400 });

  try {
    const query = `anime/ranking?ranking_type=${type}&offset=${offset}&limit=${LIMIT}&fields=mean,alternative_titles`;
    const response = await getAnimations(query, "ranking");
    return await toProxyResponse(response);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "network_error", message: "Upstream network error" }, { status: 502 });
  }

}