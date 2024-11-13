import styled from 'styled-components';
import IMAGE from '../assets/logo.png';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const CATEGORY = [
    {
        id: null,
        name: '전체'
    },
    {
        id: 0,
        name: '동화'
    },
    {
        id: 1,
        name: '소설'
    },
    {
        id: 2,
        name: '사회'
    }
]

export default function Header() {
    return (
        <HeaderStyle >
            <h1 className='logo'>
                <img src={IMAGE} alt="logo" />
            </h1>
            <nav className='category'>
                <ul >
                    {
                        CATEGORY.map((category) => (
                            <li key={category.id}>
                                <a href={category.id !== null ? `/books?category=${category.id}` : '/books'}>{category.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <nav className="auth">
                <ul>
                    <li>
                        <a href="login">
                            <FaSignInAlt />
                            로그인
                        </a>
                    </li>
                    <li>
                        <a href="signup">
                            <FaUserPlus />
                            회원가입
                        </a>
                    </li>
                </ul>
            </nav>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.header`
    width: 100%;
    margin: 0 auto;
    max-width: ${({ theme }) => theme.layoutWidth.lg};
    background-color: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.text};
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
                a {
                    color: ${({ theme }) => theme.color.text};
                    font-size: 1rem;
                    text-decoration: none;
                    font-weight: bold;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;

                    &:hover {
                        color: ${({ theme }) => theme.color.primary};
                    }
                }
            }
        }
    }
`;
