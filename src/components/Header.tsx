import styled from "styled-components";
import IMAGE from "../assets/logo.png";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCategory } from "../hooks/useCategory";
import { useAuthStore } from "../store/authStore";
import Dropdown from "./common/Dropdown";
import { FaUserCircle, FaBars } from "react-icons/fa";
import ThemeSwitcher from "./ThemeSwitcher";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
export default function Header() {
  const { isLoggedIn, storeLogout } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);

  const { categories } = useCategory();

  return (
    <HeaderStyle $isOpen={isOpen}>
      <h1 className="logo">
        <Link to="/">
          <img src={IMAGE} alt="logo" />
        </Link>
      </h1>
      <nav className="category">
        <button
          className="mobile-category-toggle"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? <FaAngleRight /> : <FaBars />}
        </button>
        <ul>
          {categories.map((category) => (
            <li key={category.category_id}>
              <Link
                to={
                  category.category_id !== null
                    ? `/books?category_id=${category.category_id}`
                    : "/books"
                }
              >
                {category.category_name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="auth">
        <Dropdown toggleButton={<FaUserCircle />}>
          <>
            {isLoggedIn && (
              <ul>
                <li>
                  <Link to="/cart">장바구니</Link>
                </li>
                <li>
                  <Link to="/orderlist">주문목록</Link>
                </li>
                <li>
                  <button onClick={storeLogout}>로그아웃</button>
                </li>
              </ul>
            )}
            {!isLoggedIn && (
              <ul>
                <li>
                  <Link to="/login">
                    <FaSignInAlt />
                    로그인
                  </Link>
                </li>
                <li>
                  <Link to="/signup">
                    <FaUserPlus />
                    회원가입
                  </Link>
                </li>
              </ul>
            )}
          </>
          <ThemeSwitcher />
        </Dropdown>
      </nav>
    </HeaderStyle>
  );
}

interface HeaderStyleProps {
  $isOpen: boolean;
}

const HeaderStyle = styled.header<HeaderStyleProps>`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layoutWidth.lg};
  color: ${({ theme }) => theme.color.surface};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};

  .logo {
    img {
      width: 170px;
    }
  }
  .category {
    .mobile-category-toggle {
      display: none;
    }
    ul {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      li {
        a {
          color: ${({ theme }) => theme.color.text};
          font-size: 1.5rem;
          text-decoration: none;
          font-weight: bold;

          &:hover {
            color: ${({ theme }) => theme.color.primary};
          }
        }
      }
    }
  }
  .auth {
    button {
      display: flex;
      align-items: center;
      background: none;
      border: none;
      cursor: pointer;
      margin: 0 auto;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100px;

      li {
        a,
        button {
          color: ${({ theme }) => theme.color.text};
          font-size: 1rem;
          text-decoration: none;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          gap: 0.5rem;
          border: none;
          line-height: 1;
          background: none;
          cursor: pointer;

          &:hover {
            color: ${({ theme }) => theme.color.primary};
          }
        }
      }
    }
  }
  @media screen and (${({ theme }) => theme.mediaQuery.mobile}) {
    height: 52px;

    .auth {
      position: absolute;
      right: 12px;
      top: 15px;

    }
    .logo {
      padding: 0 1rem;

      img {
        width: 100px;
      }
    }
    .category {

      .mobile-category-toggle {
        display: flex;
        position: absolute;
        top: 15px;
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1.5rem;
        right: ${({ $isOpen }) => ($isOpen ? "60%" : "56px")};
      }

      ul {
        position: fixed;
        top: 0;
        right: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
        width: 60%;
        transition: right 0.3s ease-in-out;
        height: 100vh;
        background-color: ${({ theme }) => theme.color.surface};
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

        margin: 0;
        padding: 24px;
        z-index: 1000;
        flex-direction: column;
      }
    }
  }
`;
