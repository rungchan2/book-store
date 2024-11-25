import BookItem, { BookItemContainer } from "../Books/BookItem";
import { useMain } from "@/hooks/useMain";
import styled from "styled-components";
import { Book } from "@/types/book.type";
interface BestSellerProps {
  bestSeller: Book;
  itemIndex: number;
}

export default function BestSeller({ bestSeller, itemIndex }: BestSellerProps) {
  return (
    <StyledBestSeller>
      <BookItem book={bestSeller} view="card" />
      <div className="rank">{itemIndex + 1}위</div>
    </StyledBestSeller>
  );
}

const StyledBestSeller = styled.div`
  ${BookItemContainer} {
    .summary,
    .price,
    .likes {
      display: none;
    }

    .title {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    } 
  }
  position: relative;
  .rank {
    position: absolute;
    top: -10px;
    left: -10px;
    font-size: 14px;
    color: ${({ theme }) => theme.color.surface};
    font-weight: 700;
    padding: 12px;
    background-color: ${({ theme }) => theme.color.primary};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
