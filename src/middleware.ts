import { NextRequest } from "next/server"
import { NextResponse } from "next/server";


export async function middleware(request: NextRequest) {
    if(request.method === "GET"){
        const userAgent = request.headers.get('user-agent') || '';
        const isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

    }
    // let i = 0;
    if(request.method==="GET" && request.nextUrl.pathname === '/ranking'){

        return NextResponse.redirect(new URL('/ranking/all', request.url));
    }
    

}

export const config = {
    matcher: ['/api/:path*', '/ranking/:path*',]
}

