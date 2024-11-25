import React from "react";
import { Review } from "@/types/book.type";
import styled from "styled-components";
import { formatDate } from "@/utils/formatNumber";
import { FaStar, FaRegStar } from "react-icons/fa";

export default function ReviewItem({ review }: { review: Review }) {
  return (
    <StyledReviewItem>
      <header className="review-header123">
        <div className="user-info">
          <span>{review.userName}</span>
          <div>
            {Array.from({ length: review.score }, (_, index) => (
              <FaStar key={index} className="star-icon" />
            ))}
            {Array.from({ length: 5 - review.score }, (_, index) => (
              <FaRegStar key={index} className="star-icon" />
            ))}
          </div>
        </div>
        <span>{formatDate(review.createdAt, "YYYY.MM.DD")}</span>
      </header>
      <div className="content">
        <p>{review.content}</p>
      </div>
    </StyledReviewItem>
  );
}

const StyledReviewItem = styled.div`
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 8px;

  .review-header123 {
    display: flex;
    justify-content: space-between;
    text-align: center;

    .user-info {
      display: flex;
      align-items: center;
      gap: 8px;
      justify-content: center;
      font-size: 12px;

      div {
        display: flex;
        align-items: center;
      }

      .star-icon {
        font-size: 14px;
        justify-self: center;
        fill: ${({ theme }) => theme.color.primary};
        stroke-width: 1px;
      }
    }
  }
`;
