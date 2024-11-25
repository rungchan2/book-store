import styled from "styled-components";
import { FaSpinner } from "react-icons/fa";

export default function Loading() {
  return (
    <LoadingContainer>
      <FaSpinner />
    </LoadingContainer>
  );
}

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 3rem;
    animation: spin 1s linear infinite;
    fill: ${({ theme }) => theme.color.primary};
  }
`;
