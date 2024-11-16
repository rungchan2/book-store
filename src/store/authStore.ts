import { create } from "zustand";

interface AuthStore {
  isLoggedIn: boolean;
  storeLogin: (token: string) => void;
  storeLogout: () => void;
}

export const getToken = () => {
    const token = localStorage.getItem('token')
    return token;
}

const setToken = (token: string) => {
    localStorage.setItem('token', token)
}

export const removeToken = () => {
    localStorage.removeItem('token')
}


export const useAuthStore = create<AuthStore>((set) => ({
  isLoggedIn: getToken() ? true : false,
  storeLogin: (token: string) => {
    set({ isLoggedIn: true });
    setToken(token)
  },
  storeLogout: () => {
    set({ isLoggedIn: false });
    removeToken()
  },
}));
