import { SignupProps } from "../pages/Signup";
import { httpClient } from "./http";

export const signup = async (data: SignupProps) => {
    const response = await httpClient.post("/users/signup", data);
    return response.data;
}