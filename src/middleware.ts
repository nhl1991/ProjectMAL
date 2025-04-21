import { NextRequest } from "next/server"
import { NextResponse } from "next/server";


export async function middleware(request: NextRequest) {
    // let i = 0;
    if(request.method==="GET" && request.nextUrl.pathname === '/ranking'){

        return NextResponse.redirect(new URL('/ranking/all', request.url));
    }
    

}

export const config = {
    matcher: ['/api/:path*', '/ranking/:path*',]
}

