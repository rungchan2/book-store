import React from "react";
import { FaSmile } from "react-icons/fa";
import styled from "styled-components";
import Title from "../Title";
import { Link } from "react-router-dom";
import Button from "../Button";

interface BooksEmptyProps {
  icon: React.ReactNode;
  message: string;
  link: string;
  linkText: string;
}

export default function BooksEmpty({ icon, message, link, linkText }: BooksEmptyProps) {
  return (
    <BooksEmptyContainer>
      <div className="icon">
        {icon}
      </div>

      <Title size="lg" color="secondary">
        {message}
      </Title>
      <p>
        <Link to={link}>{linkText}</Link>
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
    margin-bottom: 1rem;
    svg {
      font-size: 4rem;
      fill: #ccc;
    }

  }

  p {
    margin-top: 1rem;
  }
  
`;
