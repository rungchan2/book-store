import { create } from "zustand";

export type ToastType = "success" | "error" | "warning" | "info";

export interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

interface ToastStoreState {
  toast: Toast[];
  addToast: (message: string, type: ToastType) => void;
  removeToast: (id: number) => void;
}

export const useToastStore = create<ToastStoreState>((set) => ({
  toast: [],
  addToast: (message: string, type: ToastType) =>
    set((state) => ({
      toast: [...state.toast, { id: Date.now(), message, type }],
    })),
  removeToast: (id: number) =>
    set((state) => ({ toast: state.toast.filter((toast) => toast.id !== id) })),
}));
