import { useCallback } from "react";
import { toast } from "react-toastify";
import { Slide } from "react-toastify";

export const useAlert = () => {

  const showConfirm = useCallback((message: string, onConfirm: () => void) => {
    if (window.confirm(message)) {
      onConfirm();
    }
  }, []);

  const showAlert = useCallback((message: string) => {
    toast.info(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
  }, []);
  return { showAlert, showConfirm };
};
