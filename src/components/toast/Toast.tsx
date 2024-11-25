import { styled } from "styled-components";
import { useEffect } from "react";
import { Toast as TToast } from "@/store/toastStore";
import { ToastType } from "@/store/toastStore";
import { useToastStore } from "@/store/toastStore";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaExclamationTriangle,
  FaInfoCircle,
} from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";

export const TOAST_DURATION = 3000;

export default function Toast({ id, message, type }: TToast) {
  const { removeToast } = useToastStore();
  const [isFadeOut, setIsFadeOut] = useState(false);

  const handleRemoveToast = () => {
    setIsFadeOut(true);
    setTimeout(() => {
      removeToast(id);
    }, 500);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleRemoveToast();
    }, TOAST_DURATION);

    return () => clearTimeout(timer);
  }, []);

  return (
    <StyledToast type={type} className={isFadeOut ? "fadeOut" : "fadein"}>
      <p>
        {type === "success" && <FaCheckCircle />}
        {type === "error" && <FaTimesCircle />}
        {type === "warning" && <FaExclamationTriangle />}
        {type === "info" && <FaInfoCircle />}
        {message}
      </p>
      <button onClick={handleRemoveToast}>
        <FaPlus />
      </button>
    </StyledToast>
  );
}

const StyledToast = styled.div<{ type: ToastType }>`
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  padding: 1rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  min-width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &.fadeOut {
    animation: fadeOut 0.5s ease-out;
  }

  &.fadein {
    animation: fadein 0.5s ease-out;
  }

  background-color: ${({ theme, type }) => {
    switch (type) {
      case "success":
        return theme.color.primary;
      case "error":
        return theme.color.error;
      case "warning":
        return theme.color.warning;
      case "info":
        return theme.color.info;
      default:
        return theme.color.primary;
    }
  }};

  p {
    color: white;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    rotate: 45deg;
  }

  svg {
    font-size: 1.2rem;
  }
`;
