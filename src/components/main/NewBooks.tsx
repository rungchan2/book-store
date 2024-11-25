import styled from "styled-components";
import BookItem from "../Books/BookItem";
import { useMain } from "@/hooks/useMain";

export default function NewBooks() {
  const { books } = useMain();
  return (
    <StyledNewBooks>
      {books.map((book) => (
        <BookItem book={book} view="card" />
      ))}
    </StyledNewBooks>
  );
}

const StyledNewBooks = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  @media screen AND (${({ theme }) => theme.mediaQuery.mobile}) {
      grid-template-columns: repeat(2, 1fr);
    }
`;
