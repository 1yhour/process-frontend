import { backendFetch } from "@/lib/backend";
import {LoginInput, RegisterInput} from "../schemas/auth.schema";
import {RegisterResponse, LoginResponse} from "../types/auth";

export async function registerUser(
    body: RegisterInput
): Promise<RegisterResponse> {
    return backendFetch(
        "/api/auth/register",
        {
            method: "POST",
            body: JSON.stringify(body),
        }
    );
}
export async function loginUser(body: LoginInput): Promise<LoginResponse>{
    return backendFetch(
        "/api/auth/login",
        {
            method: "POST",
            body: JSON.stringify(body),
        }
    );
}
