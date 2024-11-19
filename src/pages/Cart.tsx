import styled from "styled-components";
import Title from "../components/Title";
import CartItem from "../components/cart/CartItem";
import { useCart } from "../hooks/useCart";
import { useState, useMemo } from "react";
import { formatNumber } from "../utils/formatNumber";
import { FaShoppingCart, FaSmile } from "react-icons/fa";
import BooksEmpty from "../components/Books/EmptySection";
import Button from "../components/Button";
import { useAlert } from "../hooks/useAlert";
import { OrderSheet } from "../types/order.type";
import { useNavigate } from "react-router-dom";
export default function Cart() {
  const { cartResponse, isEmpty, deleteCartItem } = useCart();
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const { showAlert, showConfirm } = useAlert();
  const navigate = useNavigate();
  const handleCheck = (id: number) => {
    if (checkedItems.includes(id)) {
      setCheckedItems(checkedItems.filter((item) => item !== id));
    } else {
      setCheckedItems([...checkedItems, id]);
    }
  };

  console.log(cartResponse);

  const handleDelete = (id: number) => {
    deleteCartItem(id);
  };
  const handleOrder = () => {
    if (checkedItems.length === 0) {
      showAlert("선택된 상품이 없습니다.");
      return;
    }

    const orderData: Omit<OrderSheet, "delivery"> = {
      items: checkedItems,
      totalQuantity: totalQuantity!,
      totalPrice: totalPrice!,
      firstBookTitle: cartResponse!.results[0].title,
    };

    console.log(orderData);
    navigate("/order", { state: orderData });
  }

  const totalQuantity = useMemo(() => {
    return cartResponse?.results.reduce((acc, cur) => {
      if (checkedItems.includes(cur.id)) {
        return acc + cur.quantity;
      }
      return acc;
    }, 0);
  }, [cartResponse?.results, checkedItems]);

  const totalPrice = useMemo(() => {
    return cartResponse?.results.reduce((acc, cur) => {
      if (checkedItems.includes(cur.id)) {
        return acc + cur.price * cur.quantity;
      }
      return acc;
    }, 0);
  }, [cartResponse?.results, checkedItems]);

  return (
    <StyledCart>
      <Title size="lg" color="primary">
        장바구니
      </Title>
      <div className="cart-container">
        <div className="cart-list">
          {cartResponse?.results.map((cart) => (
            <CartItem
              onCheck={handleCheck}
              key={cart.id}
              cart={cart}
              checkedItems={checkedItems}
              deleteCartItem={handleDelete}
            />
          ))}
          {isEmpty && (
            <BooksEmpty
              icon={<FaShoppingCart />}
              message="장바구니가 비었습니다."
              link="/books"
              linkText="도서 검색하기"
            />
          )}
        </div>
        <div className="summary">
          <Title size="md" color="primary">
            주문 요약
          </Title>
          <dl>
            <dt>총 수량</dt>
            <dd>{formatNumber(Number(totalQuantity))}개</dd>
          </dl>
          <dl>
            <dt>총 금액</dt>
            <dd>{formatNumber(Number(totalPrice))}원</dd>
          </dl>
          <Button className="order-button" scheme="primary" size="md" onClick={handleOrder}>
            주문하기
          </Button>
        </div>
      </div>
    </StyledCart>
  );
}

export const StyledCart = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;

  .cart-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 24px;

    .left {
      display: flex;
      flex-direction: column;
      gap: 24px;
      width: 100%;

      .little-summary {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 1rem;
        border: 1px solid ${({ theme }) => theme.color.border};
        border-radius: 10px;
      }
    }
    .address-input {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 1rem;
      border: 1px solid ${({ theme }) => theme.color.border};
      border-radius: 10px;

      .delivery {
        display: flex;
        flex-direction: column;
        gap: 16px;

        p {
          margin-top: -8px;
          padding: 0;
          margin: 0;
          color: ${({ theme }) => theme.color.error};
          align-self: flex-end;
        }

        fieldset {
          border: none;
          margin: 0;
          padding: 0;
          display: flex;
          gap: 16px;
          label {
            font-weight: 600;
            width: 100px;
          }

          .input-wrapper {
            flex: 1;
            input {
              width: 100%;
            }
          }
        }
      }
    }

    .cart-list {
      display: flex;
      width: 100%;
      flex: 1;
      flex-direction: column;
      gap: 24px;
    }
  }

  .summary {
    width: 240px;
    border: 1px solid ${({ theme }) => theme.color.border};
    padding: 1rem;
    border-radius: 10px;
    height: fit-content;

    dl {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;

      dt {
        font-weight: 600;
      }
    }

    .order-button {
      width: 100%;
    }
  }
`;
