import { NextRequest, NextResponse } from "next/server";

import { registerSchema } from "@/app/schemas/auth.schema";
import { registerUser } from "@/app/services/auth.service";
import { setAccessTokenCookie } from "@/lib/cookies";
import { handleApiError } from "@/lib/api-error";
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const result = registerSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json(
                {
                    error: result.error.flatten(),
                },
                {
                    status: 400,
                }
            );
        }

        const data = await registerUser(result.data);

        const response = NextResponse.json(
            {
                success: true,
                message: "Registered successfully",
            },
            {
                status: 201,
            }
        );

        setAccessTokenCookie(
            response,
            data.accessToken
        );

        return response;
    } catch (error) {
        return handleApiError(error);
    }
}