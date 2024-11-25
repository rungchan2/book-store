import React from "react";
import Title from "../components/Title";
import styled from "styled-components";
import BooksFilter from "../components/Books/BooksFilter";
import BookViewSwitcher from "../components/Books/BookViewSwitcher";
import BookList from "../components/Books/BooksList";
import BooksEmpty from "../components/Books/EmptySection";
import Pagination from "../components/Books/Pagination";
import { useBooks } from "../hooks/useBooks";
import { Book } from "../types/book.type";
import { FaSmile } from "react-icons/fa";
import Loading from "../components/Loading";
import { useBooksInfinite } from "../hooks/useBooksInfinite";
import Button from "../components/Button";
import { useEffect, useRef } from "react";

export default function Books() {
  // const { books, pagination, isEmpty, isBooksLoading } = useBooks();

  const {
    books,
    fetchNextPage,
    hasNextPage,
    isBooksLoading,
    pagination,
    isEmpty,
  } = useBooksInfinite();

  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage) {
        loadMore();
        fetchNextPage();
      }
    });

    if (moreRef.current) {
      observer.observe(moreRef.current);
    }

    return () => observer.disconnect();
  }, [books, moreRef]);

  console.log(books, moreRef);

  const loadMore = () => {
    if (!hasNextPage) return;
    fetchNextPage();
  };

  return (
    <div>
      <Title color="primary" size="lg">
        도서검색 결과
      </Title>
      <BookListContainer>
        <div className="filter-container">
          <BooksFilter />
          <BookViewSwitcher />
        </div>
        {isBooksLoading ? (
          <Loading />
        ) : !isEmpty && books && pagination ? (
          <>
            <BookList books={books} />
            {/* <Pagination pagination={pagination} /> */}
          </>
        ) : (
          <BooksEmpty
            icon={<FaSmile />}
            message="검색결과가 없습니다."
            link="/books"
            linkText="전체 결과 검색"
          />
        )}
        <div className="more" ref={moreRef}>
          <Button scheme="primary" size="md" onClick={() => fetchNextPage()}>
            {hasNextPage ? "더보기" : "더보기 없음"}
          </Button>
        </div>
      </BookListContainer>
    </div>
  );
}

const BookListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .filter-container {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
  }
`;
