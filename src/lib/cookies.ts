import { NextResponse } from "next/server";

export function setAccessTokenCookie( response: NextResponse, token: string){

    response.cookies.set({
        name:"access_tooken",
        value: token,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite:"lax",
        maxAge: 60 * 60,
        path: "/",
    });
}