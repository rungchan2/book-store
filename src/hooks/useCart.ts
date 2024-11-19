import { getCart } from "../api/cart.api";  
import { useState } from "react";
import { Cart, CartResponse } from "../types/cart.type";
import { useEffect } from "react";
import { deleteCart } from "../api/cart.api";
export const useCart = () => {
    const [cartResponse, setCartResponse] = useState<CartResponse | null>(null);
    const [isEmpty, setIsEmpty] = useState(false);

    const deleteCartItem = (id: number) => {
        deleteCart(id).then(() => {
            const newCartResponse = {
                message: cartResponse!.message,
                results: cartResponse!.results.filter((cart) => cart.id !== id)
            };
            setCartResponse(newCartResponse);
        });
    }

    useEffect(() => {
        getCart().then((response) => {
            setCartResponse(response);
            setIsEmpty(response.results.length === 0);
        });
    }, []);

    return { cartResponse, isEmpty, deleteCartItem };
};
