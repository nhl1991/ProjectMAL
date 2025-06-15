import { NextRequest } from "next/server"
import { NextResponse } from "next/server";


export async function middleware(request: NextRequest) {
    // let i = 0;
    console.log('middleware:', request)
    if (request.method === "GET") {
        if (request.nextUrl.pathname === '/ranking') {
            const response = NextResponse.next();
            response.headers.set('x-url', request.url);
            console.log('/ranking')
            return response;
        } else if (request.nextUrl.pathname.startsWith('/season/')) {
            const response = NextResponse.next();
            response.headers.set('x-url', request.url);
            console.log('/season')
            return response;
        }else if (request.nextUrl.pathname === '/search'){
            console.log('=>Search')

        }else{
            // console.log('NONE')
        }
        // console.log(request.nextUrl.search);
        // return NextResponse.redirect(new URL(`/ranking/all/${request.nextUrl.search}`, request.url));
    }


}

export const config = {
    matcher: ['/api/:path*', '/ranking/:path*', '/season/:path*']
}

