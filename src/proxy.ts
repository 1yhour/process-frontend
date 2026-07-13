import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest){
    const token = request.cookies.get('access_token');
    const path = request.nextUrl.pathname;
    const protectedRoute = ['/admin', '/home'];
    const isProtectedRoute = protectedRoute.some(route => path.startsWith(route));
    const role = request.cookies.get('role')?.value;

    if(!token && isProtectedRoute){
        const loginUrl = new URL('/login', request.url);
        return NextResponse.redirect(loginUrl);
    }
    if(path.startsWith('/admin') && role !== 'admin'){
        return NextResponse.json({
            message: 'Access Denied'
        }, {
            status: 403
        });
    }
    return NextResponse.next();
}