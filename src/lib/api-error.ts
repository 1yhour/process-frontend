import { NextResponse } from "next/server";

export function handleApiError(error: any){
    if(error.status){
        return NextResponse.json(error.data,{
            status: error.status
        })
    }
    console.error(error);
    return NextResponse.json(
        {
            error: "Internal Server Error"
        },
        {
            status: 500
        }
    )
}