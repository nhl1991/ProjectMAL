import { NextRequest } from "next/server"
import { NextResponse } from "next/server";


export async function middleware(request: NextRequest) {
    // let i = 0;
    
    if (request.method === "GET") {
        // console.log('GET 요청. ', request.url);

        if (request.nextUrl.pathname.startsWith('/ranking/')) {
            const response = NextResponse.next();

            response.headers.set('x-url', request.url);
            
            return response;
        }
        if (request.nextUrl.pathname.startsWith('/season/')) {
            const response = NextResponse.next();

            response.headers.set('x-url', request.url);
            
            return response;
        }
        
        if (request.nextUrl.pathname === '/result'){
            const response = NextResponse.next();

            response.headers.set('x-url', request.url);
            
            return response;

        }
    }


}

export const config = {
    matcher: ['/api/:path*', '/ranking/:path*', '/season/:path*']
}

