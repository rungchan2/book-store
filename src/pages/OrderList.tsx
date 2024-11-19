import React from "react";
import styled from "styled-components";
import Title from "../components/Title";
import { useOrders } from "../hooks/useOrders";
import { formatDate, formatNumber } from "../utils/formatNumber";
import Button from "../components/Button";
export default function OrderList() {
  const { orders, selectedItem, selectOrderItem } = useOrders();

  console.log(orders);

  return (
    <StyledOrderList>
      <Title size="lg" color="primary">
        주문 목록
      </Title>
      <table>
        <thead>
          <tr>
            <th>주문번호</th>
            <th>주문일자</th>
            <th>주소</th>
            <th>수령인</th>
            <th>연락처</th>
            <th>대표상품명</th>
            <th>수량</th>
            <th>총액</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <React.Fragment key={`order-${order.id}`}>
              <tr>
                <td>{order.id}</td>
                <td>{formatDate(order.created_at, "YYYY.MM.DD")}</td>
                <td>{order.address}</td>
                <td>{order.receiver}</td>
                <td>{order.contact}</td>
                <td>{order.book_title}</td>
                <td>{order.total_quantity}권</td>
                <td>{formatNumber(order.total_price)}원</td>
                <td>
                  <Button
                    scheme="primary"
                    size="sm"
                    onClick={() => selectOrderItem(order.id)}
                  >
                    자세히
                  </Button>
                </td>
              </tr>
              {selectedItem === order.id && (
                <tr key={`detail-${order.id}`}>
                  <td colSpan={9}>
                    <ul className="detail">
                      {order.detail?.map((detail) => (
                        <li key={`detail-${order.id}-${detail.book_id}`}>
                          <div>
                            <span>{detail.title}</span>
                            <span>{detail.quantity}권</span>
                            <span>{formatNumber(detail.price)}원</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </StyledOrderList>
  );
}

const StyledOrderList = styled.div`
  padding: 20px;
  table {
    width: 100%;
    border-collapse: collapse;
    border-top: 1px solid ${({ theme }) => theme.color.border};
    border-bottom: 1px solid ${({ theme }) => theme.color.border};

    th,
    td {
      padding: 10px;
      border-bottom: 1px solid ${({ theme }) => theme.color.border};
      text-align: center;
    }
    .detail {
        margin: 0;

        li {
            list-style: square;
            text-align: left;
            list-style: none;

            div {
                display: flex;
                padding: 10px;
                gap: 10px;
            }
        }
    }
  }
`;
