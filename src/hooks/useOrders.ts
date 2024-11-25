import { useEffect, useState } from "react";
import { OrderDetailItem } from "../types/order.type";
import { getOrderList, getOrderDetail } from "../api/order.api";

export const useOrders = () => {
  const [orders, setOrders] = useState<OrderDetailItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  useEffect(() => {
    getOrderList().then((orders) => {
      setOrders(orders);
    });
  }, []);

  const selectOrderItem = (orderId: number) => {
    //요청 방어
    if (orders.filter((item) => item.id === orderId)[0]?.detail) {
      setSelectedItem(orderId);
      return;
    }

    getOrderDetail(orderId)
      .then((orderDetail) => {
        setSelectedItem(orderId);
        console.log("orderDetail", orderDetail);
        setOrders(
          orders.map((item) => {
            if (item.id === orderId) {
              return {
                ...item,
                detail: orderDetail,
              };
            }
            return item;
          })
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return { orders, selectedItem, selectOrderItem };
};
