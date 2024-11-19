import styled from "styled-components";
import { Cart } from "../../types/cart.type";
import { formatNumber } from "../../utils/formatNumber";
import Button from "../Button";
import Title from "../Title";
import CheckIcon from "./CheckIcon";
import { useState, useMemo } from "react";
import { useAlert } from "../../hooks/useAlert";
interface CartItemProps {
  cart: Cart;
  checkedItems: number[];
  onCheck: (id: number) => void;
  deleteCartItem: (id: number) => void;
}

export default function CartItem({ cart, checkedItems, onCheck, deleteCartItem }: CartItemProps) {

  const { showConfirm } = useAlert();
  const handleCheck = () => {
    onCheck(cart.id);
  }
  
  const handleDelete = () => {
    showConfirm("정말 삭제하시겠습니까?", () => {
      deleteCartItem(cart.id);
    });
  }
  const isChecked = useMemo(() => {
    return checkedItems.includes(cart.id);
  }, [checkedItems, cart.id]);
  return (
    <StyledCartItem>
      <div className="item-container">
        <div className="check">
          <CheckIcon isChecked={isChecked} onCheck={handleCheck}/>
        </div>
        <div className="info">
          <StyledTitle size="md" color="orange">
            {cart.title}
          </StyledTitle>
          <p className="">{cart.summary}</p>
          <p className="price">{formatNumber(cart.price)}원</p>
          <p className="quantity">{cart.quantity}</p>
        </div>
      </div>
      <Button scheme="secondary" size="md" onClick={handleDelete}>
        삭제
      </Button>
    </StyledCartItem>
  );
}

const StyledTitle = styled(Title)`
  line-height: 1;
  padding: 0;
`;

const StyledCartItem = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.color.border};
  padding: 12px;

  .item-container {
    display: flex;
    gap: 24px;
  }

  .check {
    padding-top: 4px;
    flex-shrink: 0;
    width: 24px;
  }

  .info {
    flex: 1;
  }

  p {
    margin: 0;
    padding: 0 0 8px 0;
  }
`;
