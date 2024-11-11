import styled from 'styled-components';

export default function Header() {
    return (
        <HeaderStyle >
            <h1>Header</h1>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.header`
    background-color: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.text};
`;