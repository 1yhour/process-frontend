import { NextResponse } from "next/server";

export function setAccessTokenCookie( response: NextResponse, token: string){

    response.cookies.set({
        name:"access_token",
        value: token,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite:"lax",
        maxAge: 60 * 60,
        path: "/",
    });
}

export function clearAccessTokenCookie(response: NextResponse){
    response.cookies.set({
        name:"access_token",
        value: "",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite:"lax",
        maxAge: 0,
        path: "/",
    })
}