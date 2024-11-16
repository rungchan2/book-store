import { SignupProps } from "../pages/Signup";
import { ResetPWProps } from "../pages/ResetPW";
import { httpClient } from "./http";

export const signup = async (data: SignupProps) => {
    const response = await httpClient.post("/signup", data);
    return response.data;
}

export const pwResetRequest = async (data: ResetPWProps) => {
    const response = await httpClient.post("/reset", data);
    return response.data;
}

export const resetPW = async (data: ResetPWProps) => {
    const response = await httpClient.put("/reset", data);
    return response.data;
}

interface LoginResponse {
    message: string;
    token: string;
}

export const login = async (data: ResetPWProps) => {
    const response = await httpClient.post<LoginResponse>("/login", data);
    return response.data;
}