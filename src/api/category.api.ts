import { httpClient } from "./http";
import { Category, CategoryResponse } from "../types/category.type";

export const getCategories = async () => {
    const response = await httpClient.get<CategoryResponse>("/category");
    return response.data;

};