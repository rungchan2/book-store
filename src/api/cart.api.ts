import { httpClient } from "./http";
import { Cart, CartResponse } from "../types/cart.type";
interface AddCartParams {
  book_id: number;
  quantity: number;
}

export const addCart = async (params: AddCartParams) => {
  const response = await httpClient.post(`/cart`, params);
  return response.data;
};

export const getCart = async () => {
  const response = await httpClient.get<CartResponse>(`/cart`);
  return response.data;
};

export const deleteCart = async (id: number) => {
  const response = await httpClient.delete(`/cart/${id}`);
  return response.data;
};
