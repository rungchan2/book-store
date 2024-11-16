import React from "react";
import { FaSmile } from "react-icons/fa";
import styled from "styled-components";
import Title from "../Title";
import { Link } from "react-router-dom";
import Button from "../Button";

export default function BooksEmpty() {
  return (
    <BooksEmptyContainer>
      <div className="icon">
        <FaSmile />
      </div>

      <Title size="lg" color="secondary">
        검색결과가 없습니다.
      </Title>
      <p>
        <Link to="/books">전체 결과 검색</Link>
      </p>
    </BooksEmptyContainer>
  );
}

const BooksEmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 120px 0;

  .icon {
    svg {
      font-size: 4rem;
      fill: #ccc;
    }
  }

  p {
    margin-top: 1rem;
  }
  
`;
