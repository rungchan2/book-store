import React from "react";
import { Book } from "../../types/book.type";
import { getBookImage } from "../../utils/image";
import styled from "styled-components";
import { formatNumber } from "../../utils/formatNumber";
import { FaStar } from "react-icons/fa";
import { ViewMode } from "./BookViewSwitcher";

export default function BookItem({
  book,
  view,
}: {
  book: Book;
  view: ViewMode;
}) {
  return (
    <BookItemContainer view={view}>
      <div className="book-item-image">
        <img src={getBookImage(book.id)} alt={book.title} />
      </div>
      <div className="content">
        <div className="title">{book.title}</div>
        <div className="summary">{book.summary}</div>
        <div className="author">{book.author}</div>
        <div className="price">{formatNumber(book.price)}</div>
        <div className="likes">
          <FaStar />
          <span>{book.likes}</span>
        </div>
      </div>
    </BookItemContainer>
  );
}

const BookItemContainer = styled.div<{ view: ViewMode }>`
  display: flex;
  flex-direction: ${({ view }) => (view === "list" ? "row" : "column")};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;

  .book-item-image {
    overflow: hidden;

    img {
      width: 100%;
      max-width: 200px;
      object-fit: cover;
      border-radius: 10px;
    }
  }

  .content {
    width: ${({ view }) => (view === "list" ? "calc(100% - 100px)" : "100%")};
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;

    .title {
      font-size: 1.2rem;
      font-weight: bold;
    }

    .summary {
      font-size: 0.8rem;
    }

    .author {
      font-size: 0.8rem;
    }

    .price {
      font-size: 1.2rem;
      font-weight: bold;
    }
    .likes {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      font-size: 0.8rem;
      justify-content: flex-end;
      margin-top: auto;
      font-weight: bold;
      border: 1px solid ${({ theme }) => theme.color.text};
      padding: 5px 10px;
      border-radius: 5px;
      position: absolute;
      bottom: 10px;
      right: 10px;
      color: ${({ theme }) => theme.color.white};

      svg {
        font-size: 1.2rem;
        color: ${({ theme }) => theme.color.primary};
      }
    }
  }
`;
