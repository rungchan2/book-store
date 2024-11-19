import React from "react";
import styled from "styled-components";
import { IBookDetail } from "../../types/book.type";
import InputText from "../InputText";
import Button from "../Button";
import { useState } from "react";
import { addCart } from "../../api/cart.api";
import { useAlert } from "../../hooks/useAlert";
import { useAuthStore } from "../../store/authStore";
interface AddCartProps {
  book: IBookDetail;
}

export default function AddCart({ book }: AddCartProps) {
  const [quantity, setQuantity] = useState<number>(1);


  const {isLoggedIn} = useAuthStore();

  const {showAlert} = useAlert()
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value) < 1 ? 1 : Number(e.target.value));
  }
  
  const handleQuantityDecrease = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setQuantity(prev => prev - 1 < 1 ? 1 : prev - 1);
  }

  const handleQuantityIncrease = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setQuantity(prev => prev + 1);
  }

  const handleAddCart = () => {
    if (!isLoggedIn) {
      showAlert('로그인 후 이용해주세요.');
      return;
    }
    addCart({ book_id: book.id, quantity })
    .then(() => {
        showAlert('장바구니에 담겼습니다.');
    })
    .catch((error) => {
      showAlert(error.message);
    });
  }

  return (
    <StyledAddCart>
      <div className="quantity">
        <InputText className="quantity-input" placeholder="수량" type="number" value={quantity} onChange={handleQuantityChange} />
        <Button size="md" scheme="secondary" onClick={handleQuantityDecrease}>
          -
        </Button>
        <Button size="md" scheme="secondary" onClick={handleQuantityIncrease}>
          +
        </Button>
      </div>

      <Button size="md" scheme="primary" onClick={handleAddCart}>
        장바구니 담기
      </Button>
    </StyledAddCart>
  );
}

const StyledAddCart = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;

  .quantity {
    display: flex;
    gap: 10px;

    .quantity-input {
        width: 100px;
    }
  }

  
`;
