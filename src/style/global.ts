import { createGlobalStyle } from 'styled-components';
import 'sanitize.css';
import { lightTheme, darkTheme } from './theme';

interface IGlobalStyleProps {
    themeName: string;
}

export const GlobalStyle = createGlobalStyle<IGlobalStyleProps>`

    * {
        box-sizing: border-box;
        color: ${({ theme }) => theme.name === 'light' ? lightTheme.color.text : darkTheme.color.text};
    }

    body {
        margin: 0;
        padding: 0;
        color: ${({ theme }) => theme.color.text};
        background-color: ${({ theme }) => theme.color.background};
        transition: background-color 0.3s ease, color 0.3s ease;
    }

    button {
        background-color: ${({ theme }) => theme.color.primary};
        color: ${({ theme }) => theme.color.text};
        border: 1px solid ${({ theme }) => theme.color.border};
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: ${({ theme }) => theme.color.secondary};
        }
    }

    h1, h2, h3, h4, h5, h6 {
        color: ${({ theme }) => theme.color.text};
    }

    a {
        color: ${({ theme }) => theme.color.primary};
        text-decoration: none;

        &:hover {
            color: ${({ theme }) => theme.color.secondary};
        }
    }

    input, textarea {
        background-color: ${({ theme }) => theme.color.surface};
        border: 1px solid ${({ theme }) => theme.color.border};
        color: ${({ theme }) => theme.color.text};
        padding: 8px;
        border-radius: 4px;

        &:focus {
            border-color: ${({ theme }) => theme.color.primary};
            outline: none;
        }
    }

    ::selection {
        background-color: ${({ theme }) => theme.color.primary};
        color: ${({ theme }) => theme.color.text};
    }
`;
