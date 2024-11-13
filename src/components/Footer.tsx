import React from "react";
import IMAGE from "../assets/logo.png";
import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <h1 className="logo">
        <img src={IMAGE} alt="logo" />
      </h1>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Bookstore. All rights reserved.</p>
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layoutWidth.lg};
  background-color: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  .logo {
    img {
      width: 120px;
    }
  }
  .copyright {
    p {
      font-size: 0.8rem;
    }
  }
`;
