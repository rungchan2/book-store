import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useBook } from "../hooks/useBook";
import { getBookImage } from "../utils/image";
import { formatDate, formatNumber } from "../utils/formatNumber";
import { IBookDetail } from "../types/book.type";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import EllipsisBox from "../components/EllipsisBox";
import LikeButton from "../components/LikeButton";
import AddCart from "../components/Book/AddCart";

const infoList = [
  {
    label: "저자",
    key: "author",
  },
  {
    label: "카테고리",
    key: "category_name",
    filter: (book: IBookDetail) => {
      return (
        <Link to={`/category/${book.category_id}`}>{book.category_name}</Link>
      );
    },
  },
  {
    label: "가격",
    key: "price",
    filter: (book: IBookDetail) => {
      return formatNumber(book.price);
    },
  },
  {
    label: "출간일",
    key: "pub_date",
    filter: (book: IBookDetail) => {
      return formatDate(book.pubDate, "YYYY-MM-DD");
    },
  },
  {
    label: "좋아요",
    key: "liked",
  },
  {
    label: "페이지",
    key: "pages",
  },
  {
    label: "ISBN",
    key: "isbn",
  },
];

export default function BookDetail() {
  const { id } = useParams();
  const { bookResults, likeToggle } = useBook(id as string);

  if (!bookResults) {
    return <div>Loading...</div>;
  }

  console.log(bookResults);

  return (
    <BookDetailContainer>
      <div className="header">
        <div className="img">
          <img src={getBookImage(bookResults?.id)} alt={bookResults?.title} />
        </div>
        <div className="info">
          <Title size="lg" color="black">
            {bookResults?.title}
          </Title>
          {infoList.map((info) => (
            <dl key={info.key}>
              <dt>{info.label}</dt>
              {
                <dd>
                  {info.filter
                    ? info.filter(bookResults)
                    : bookResults[info.key as keyof IBookDetail]}
                </dd>
              }
            </dl>
          ))}
          <p className="summary">{bookResults?.summary}</p>
          <div className="like">
            <LikeButton book={bookResults} likeToggle={likeToggle} />
          </div>
          <div className="add-cart">
            <AddCart book={bookResults} />
          </div>
        </div>
      </div>
      <div className="content">
        <Title size="md" color="black">
          상세 정보
        </Title>
        <EllipsisBox lineLimit={3}>{bookResults?.detail}</EllipsisBox>

        <Title size="md" color="black">
          목차
        </Title>
        <div className="toc">{bookResults?.contents}</div>
      </div>
    </BookDetailContainer>
  );
}

const BookDetailContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 40px auto;
  padding: 0 20px;

  .header {
    display: flex;
    align-items: start;
    gap: 24px;

    .img {
      flex: 1;

      &:hover {
        transform: translateY(-4px);
      }

      img {
        width: 100%;
        height: auto;
      }
    }

    .info {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 0;

      dl {
        display: flex;
        margin: 0;
        padding: 0;

        dt {
          width: 100px;
          color: ${({ theme }) => theme.color.secondary};
        }
        a {
          color: ${({ theme }) => theme.color.primary};
        }
      }
    }
    .summary {
      color: #222;
      margin: 0;

      p {
        padding: 0;
        margin: 0;
      }
    }
  }

  .content {
    margin: 0 auto;

    .detail {
    }
  }

  @media (max-width: 768px) {
    .header {
      flex-direction: column;
      gap: 32px;

      .img {
        width: 100%;
        height: auto;
        aspect-ratio: 2/3;
      }

      .info {
        padding: 0;
      }
    }

    .content {
      .summary {
        padding: 24px;
      }

      .detail {
        padding: 0 16px;
      }
    }
  }
`;
