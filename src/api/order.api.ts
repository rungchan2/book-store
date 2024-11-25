import { requestHandler } from "./http";
import { OrderSheet, Order, OrderDetailItem, OrderDetail } from "../types/order.type";

export const createOrder = async (orderData: OrderSheet) => {
  return await requestHandler("post", "/orders", orderData);
};

export const getOrderList = async () => {
  return await requestHandler("get", "/orders");
};

export const getOrderDetail = async (id: number) => {
  return await requestHandler("get", `/orders/${id}`);
};
