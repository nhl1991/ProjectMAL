import { getAnimations } from "@/lib/fetchAnimation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const {pathname } =req.nextUrl
    const id = pathname.split('/')[3]
    
    const result = await getAnimations(`anime/${id}?fields=id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,updated_at,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics`, 'details')
     if (result.ok) {
        const data = await result.json();
        return NextResponse.json(data, { status: result.status });
      } else {
        const error = await result.json();
        return NextResponse.json(error, { status: result.status });
      }
}