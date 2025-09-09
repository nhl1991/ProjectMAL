import { NextRequest } from "next/server"
import { NextResponse } from "next/server";


export async function middleware(request: NextRequest) {

    if (request.method === "GET") {
        if (request.nextUrl.pathname === '/result') {
            const response = NextResponse.next();

            response.headers.set('x-url', request.url);

            return response;
        }
    }
}

export const config = {
    matcher: ['/api/:path*', '/ranking/:path*', '/season/:path*']
}

