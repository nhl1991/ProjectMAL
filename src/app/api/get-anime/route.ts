import { getAnimations } from "@/lib/fetchAnimation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const query = req.url.split("get-anime")[1];
  // const body = req.body;
  // console.log("body: ",body);

  const result = await getAnimations(query, "search");

  if(result.ok){
    const data = await result.json();
    return NextResponse.json(data, {status: result.status});
  }else{
    const error = await result.json();
    return NextResponse.json(error, {status: result.status});
  }
  return NextResponse.next().status

  
}
