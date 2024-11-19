import { httpClient } from "./http";
import { OrderSheet, Order, OrderWithListOfDetail, OrderDetail } from "../types/order.type";

export const createOrder = async (orderData: OrderSheet) => {
  return await httpClient.post("/orders", orderData);
};

export const getOrderList = async () => {
  return await httpClient.get<Order[]>("/orders");
};

export const getOrderDetail = async (id: number) => {
  return await httpClient.get<OrderDetail[]>(`/orders/${id}`);
};
