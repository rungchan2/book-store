import { useEffect, useState } from "react";
import { OrderWithListOfDetail } from "../types/order.type";
import { getOrderList, getOrderDetail } from "../api/order.api";

export const useOrders = () => {
  const [orders, setOrders] = useState<OrderWithListOfDetail[]>([]);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  useEffect(() => {
    getOrderList().then((orders) => {
      setOrders(orders.data);
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
        setOrders(
          orders.map((item) => {
            if (item.id === orderId) {
              return { ...item, detail: orderDetail.data };
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
