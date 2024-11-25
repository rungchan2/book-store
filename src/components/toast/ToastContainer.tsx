import React from "react";
import styled from "styled-components";
import Toast from "./Toast";
import { useToastStore } from "@/store/toastStore";

export default function ToastContainer() {
  const toasts = useToastStore((state) => state.toast);

  return (
    <StyledToastContainer>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          id={toast.id}
          message={toast.message}
          type={toast.type}
        />
      ))}
    </StyledToastContainer>
  );
}

const StyledToastContainer = styled.div`
  position: fixed;
  top: 32px;
  right: 24px;
  z-index: 1000;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
