import axios, { AxiosRequestConfig } from "axios";
import { getToken, removeToken } from "../store/authStore";
import { useAlert } from "../hooks/useAlert";
const BASE_URL = "http://localhost:3000";
const DEFAULT_TIMEOUT = 30000;


export const createClient = (config?: AxiosRequestConfig) => {

  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: DEFAULT_TIMEOUT,
    headers: {
      "Content-Type": "application/json",
      Authorization: getToken() ? getToken() : ""
    },
    withCredentials: true,
    ...config,
    });

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      console.log(error)
      if(error.response.status === 401) {
        removeToken()
        window.location.href = "/login"
        return
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export const httpClient = createClient();
