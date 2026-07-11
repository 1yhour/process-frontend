import { NextResponse } from "next/server";

import { clearAccessTokenCookie } from "@/lib/cookies";
import { handleApiError } from "@/lib/api-error";

export async function POST(){
    try{
        const response = NextResponse.json({
            status: true,
            message: "Logged out successfully"
        })
        clearAccessTokenCookie(response);    
        return response;
    
    }
    catch(error){
        return handleApiError(error);
    }
}