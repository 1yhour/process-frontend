export interface RegisterRequest {
    name: string;
    email: string;
    password: string
}

export interface RegisterResponse {
    success: boolean,
    message: string,
    token: string,
    data: {
        id: number,
        name: string,
        email: string,
    }
}

export interface LoginInput{
    email: string,
    password: string,
}

export interface LoginResponse {
    success: boolean,
    message: string,
    data: {
        access_token: string,
        token_type: string,
        user: {
            id: number,
            name: string,
            email: string,
            role: string
        }
    }
}
