export enum UserRole {
    ADMIN = 'Admin',
    SUPERVISOR = 'Supervisor',
    OPERADOR = 'Operador',
}

export interface TokenPayload {
    sub: string; // email del usuario
    role: UserRole;
    exp: number; // unix timestamp de expiración 
}

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface LoginResponse {
    message: string;
}
