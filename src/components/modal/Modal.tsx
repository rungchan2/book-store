import { styled } from "styled-components";
import { FaTimes } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({ children, isOpen, onClose }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isFadeOut, setIsFadeOut] = useState(false);
  const handleOnClose = () => {
    setIsFadeOut(true);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      handleOnClose();
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      handleOnClose();
    }
  };

  const handleAnimationEnd = () => {
    if (isFadeOut) {
      onClose();
      setIsFadeOut(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen]);

  console.log("isFadeOut", isFadeOut);

  if (!isOpen) return null;

  return createPortal(
    <StyledModal
      className={isFadeOut ? "fade-out" : "fade-in"}
      onClick={handleOverlayClick}
      onAnimationEnd={handleAnimationEnd}
    >
      <div className="modal-body" ref={modalRef}>
        <div className="modal-content">
          {children}
          <div className="modal-close" onClick={handleOnClose}>
            <FaTimes />
          </div>
        </div>
      </div>
    </StyledModal>,
    document.body
  );
}

const StyledModal = styled.div`
  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  &.fade-out {
    animation: fade-out 0.3s ease-in-out forwards;
  }

  &.fade-in {
    animation: fade-in 0.3s ease-in-out forwards;
  }
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);

  .modal-body {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%; */

    .modal-content {
      position: relative;
      background-color: white;
      border-radius: 10px;
      padding: 32px 24px;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

      .modal-close {
        position: absolute;
        top: 5px;
        right: 10px;
      }
    }
  }
`;
