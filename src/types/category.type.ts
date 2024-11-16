export interface CategoryResponse {
    message: string;
    results: Category[];
}

export interface Category {
    category_id: number | null;
    category_name: string;
    isActive: boolean;
}