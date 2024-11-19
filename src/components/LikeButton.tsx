import React from "react";
import styled from "styled-components";
import { IBookDetail } from "../types/book.type";
import Button from "./Button";
import { FaHeart } from "react-icons/fa";
import { formatNumber } from "../utils/formatNumber";

interface LikeButtonProps {
  book: IBookDetail;
  likeToggle: () => void;
}

export default function LikeButton({ book, likeToggle }: LikeButtonProps) {
  
    const handleLikeToggle = () => {
    likeToggle();
  }

    return (
    <StyledLikeButton>
      <StyledButton
        scheme={book.liked ? "primary" : "secondary"}
        size="md"
        onClick={handleLikeToggle}
      >
        <FaHeart /> {formatNumber(book.likes)}
      </StyledButton>
    </StyledLikeButton>
  );
}

const StyledLikeButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    font-size: 1rem;
    fill: white;
  }
`;
