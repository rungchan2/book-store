import Footer from './Footer';
import Header from './Header';
import styled from 'styled-components';

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header/>
            <StyledLayout>{children}</StyledLayout>
            <Footer />
        </>
    )
}

const StyledLayout = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    margin: 0 auto;
    max-width: ${({ theme }) => theme.layoutWidth.lg};
    padding: 20px 0;
`;