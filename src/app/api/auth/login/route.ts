import { NextRequest, NextResponse } from 'next/server';
export async function POST(request: NextRequest){
    try{
        const body = await request.json();
        const { email, password } = body;

        const backendResponse = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`,{
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });
        
        const data = await backendResponse.json();

        if(!backendResponse.ok){
            return NextResponse.json({error: data.message}, {status: backendResponse.status});
        }
        const response = NextResponse.json(
            {message: "Successfully login" ,user: data.user},
            {status: 200}
        );

        response.cookies.set({
            name: "access_token",
            value: data.accessToken,
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: "strict",
            maxAge: 60 * 60 * 24 * 7,
            path: "/",
        });

        return response;
    }catch(e){
        return NextResponse.json({
            error: "Internal Server Error"
        }, {status: 500})
    }
}