import { productGet, productPost } from "@/app/services/product.service";
import { handleApiError } from "@/lib/api-error";
import { NextRequest, NextResponse } from "next/server";
export async function GET(request: NextRequest){
    try{
        const data = await productGet(request);
        return NextResponse.json(data, {status: 200});
    }
    catch(error){
        return handleApiError(error);
    }
}
export async function POST(request: NextRequest){
    try{
        const result = await productPost(request);
        return NextResponse.json(result, {status: 200});
    }
    catch(error){
        return handleApiError(error);
    }
}