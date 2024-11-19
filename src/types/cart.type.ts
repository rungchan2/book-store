export interface Cart {
    id: number;
    bookId: number;
    title: string;
    summary: string;
    price: number;
    quantity: number;
}

export interface CartResponse {
    results: Cart[];
    message: string;
}
