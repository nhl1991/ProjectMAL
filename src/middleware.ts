import { NextRequest } from "next/server"
import { NextResponse } from "next/server";


export async function middleware(request: NextRequest) {
    // let i = 0;
    
    if (request.method === "GET") {
        console.log('middleware :', request.nextUrl.pathname)
        if (request.nextUrl.pathname === '/ranking') {
            const response = NextResponse.next();
            response.headers.set('x-url', request.url);
            
            return response;
        } else if (request.nextUrl.pathname.startsWith('/season/')) {
            const response = NextResponse.next();
            response.headers.set('x-url', request.url);
            
            return response;
        }else if (request.nextUrl.pathname.startsWith('/search')){
            console.log('/search');

        }else{
            console.log('NONE')
        }
        // console.log(request.nextUrl.search);
        // return NextResponse.redirect(new URL(`/ranking/all/${request.nextUrl.search}`, request.url));
    }


}

export const config = {
    matcher: ['/api/:path*', '/ranking/:path*', '/season/:path*']
}

