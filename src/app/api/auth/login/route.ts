import { loginSchema } from '@/app/schemas/auth.schema';
import { NextRequest, NextResponse } from 'next/server';
import { loginUser } from '@/app/services/auth.service';
import { setAccessTokenCookie, setRoleCookie } from '@/lib/cookies';
import { handleApiError } from '@/lib/api-error';
export async function POST(request: NextRequest){
    try{
        const body = await request.json();
        const result = loginSchema.safeParse(body);

        if (!result.success){
            return NextResponse.json({
                error: result.error.flatten()
            }, {status: 400})
        }

        const { data: payload } = await loginUser(result.data);
        
        const response = NextResponse.json(
            {
                success: true,
                message: "Login Successfully",
            },
            {status: 200}
        )
    
        setAccessTokenCookie(response, payload.access_token);
        
        // Save the role to a cookie so proxy.ts can read it
        if (payload.user && payload.user.role) {
            setRoleCookie(response, payload.user.role);
        }

        return response;
    }catch(error){
        return handleApiError(error);
    }
}