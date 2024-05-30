/** @format */

import axios, {
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";

const client = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});


client.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("userToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export const request = (
  options: InternalAxiosRequestConfig
): Promise<AxiosResponse> => {
  const onSuccess = (response: AxiosResponse): AxiosResponse => response;
  const onError = (error: AxiosError): Promise<never> => {
    return Promise.reject(error);
  };
  return client(options).then(onSuccess).catch(onError);
};
