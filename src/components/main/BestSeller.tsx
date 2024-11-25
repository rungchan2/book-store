import BestSellerItem from "./BestSellerItem";
import styled from "styled-components";

import { Book } from "@/types/book.type";

interface BestSellerProps {
  bestSeller: Book[];
}

export function BestSeller({ bestSeller }: BestSellerProps) {
  return (
    <StyledBestSeller>
    {bestSeller.map((book, index) => (
        <BestSellerItem key={book.isbn} bestSeller={book} itemIndex={index} />
      ))}
    </StyledBestSeller>
  );
}

const StyledBestSeller = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;

  @media screen AND (${({ theme }) => theme.mediaQuery.mobile}) {
      grid-template-columns: repeat(2, 1fr);
    }
`;
