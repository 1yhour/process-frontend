const BackendURL = process.env.BACKEND_URL

export async function backendFetch(endpoint: string, option: RequestInit){
    const response = await fetch(`${BackendURL}${endpoint}`,{
        ...option,
        headers:{
            "Accept": "application/json",
            "Content-Type": "application/json",   
            ...(option.headers ?? {}) 
        }
    })
    const data = await response.json().catch(()=>({}));

    if(!response.ok){
        throw{
            status: response.status,
            data
        }
    }

    return data;
}