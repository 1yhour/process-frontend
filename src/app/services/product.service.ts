import { NextRequest } from "next/server";
import {ProductResponse} from "../types/auth";
import { backendFetch } from "@/lib/backend";
export async function productGet(request: NextRequest): Promise<ProductResponse>{
    const token = request.cookies.get("access_token")?.value;
    return backendFetch(
        "/api/products",
        {
            method: "GET",
            headers: token ? {"Authorization": `Bearer ${token}`} : {},
        }
    )
}
export async function productPost(request: NextRequest): Promise<ProductResponse>{
    const token = request.cookies.get("access_token")?.value;
    return backendFetch(
        "/api/products",
        {
            method: "POST",
            headers: token ? {"Authorization": `Bearer ${token}`} : {},
        }
    )
}