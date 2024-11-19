export interface Order {
    id: number;
    created_at: string;
    address: string;
    receiver: string;
    contact: string;
    book_title: string;
    total_quantity: number;
    total_price: number;
}

export interface OrderDetail {
    book_id: number;
    quantity: number;
    price: number;
    title: string;
    author: string;
}

export interface OrderSheet {
    items: number[];
    totalQuantity: number;
    totalPrice: number;
    firstBookTitle: string;
    delivery: Delivery
}

export interface Delivery {
    address: string;
    receiver: string;
    contact: string;
}

export interface OrderListResponse {
    message: string;
    results: Order[];
}

export interface OrderWithListOfDetail extends Order {
    detail?: OrderDetail[];
}
