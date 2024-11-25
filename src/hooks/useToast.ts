import { useToastStore } from "@/store/toastStore";

export const useToast = () => {
  const showCustomToast = useToastStore((state) => state.addToast);
  const removeToast = useToastStore((state) => state.removeToast);
  return { showCustomToast, removeToast };
};
