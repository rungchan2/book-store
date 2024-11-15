import { httpClient } from "./http";
import { Category } from "../types/category.type";

export const getCategories = async () => {
    const response = await httpClient.get<Category[]>("/categories");
    return response.data;
};