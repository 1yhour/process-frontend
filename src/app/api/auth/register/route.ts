import { NextRequest, NextResponse } from "next/server";

import { registerSchema } from "@/app/schemas/auth.schema";
import { registerUser } from "@/app/services/auth.service";
import { handleApiError } from "@/lib/api-error";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json(); // read incoming data from the frontend and parse it from json to JS object

        const result = registerSchema.safeParse(body); //validates data against a Zod schema without throwing exceptions

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

        await registerUser(result.data);

        return NextResponse.json(
            {
                success: true,
                message: "Registered successfully",
            },
            {
                status: 201,
            }
        );
    } catch (error) {
        return handleApiError(error);
    }
}