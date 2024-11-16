import styled from "styled-components";
import IMAGE from "../assets/logo.png";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCategory } from "../hooks/useCategory";
import { useAuthStore } from "../store/authStore";


export default function Header() {
  const { isLoggedIn, storeLogout } = useAuthStore();

  const { categories } = useCategory();

  return (
    <HeaderStyle>
      <h1 className="logo">
        <Link to="/">
          <img src={IMAGE} alt="logo" />
        </Link>
      </h1>
      <nav className="category">
        <ul>
          {categories.map((category) => (
            <li key={category.category_id}>
              <Link
                to={
                  category.category_id !== null
                    ? `/books?category=${category.category_id}`
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
        {isLoggedIn && (
          <ul>
            <li><Link to="/cart">장바구니</Link></li>
            <li><Link to="/orderlist">장바구니</Link></li>
            <li><button onClick={storeLogout}>로그아웃</button></li>
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
      </nav>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
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
    ul {
      display: flex;
      gap: 1rem;
      li {
        a, button {
          color: ${({ theme }) => theme.color.text};
          font-size: 1rem;
          text-decoration: none;
          font-weight: bold;
          display: flex;
          align-items: center;
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
`;
