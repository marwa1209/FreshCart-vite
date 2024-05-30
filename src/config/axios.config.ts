/** @format */

import axios from "axios";
const headers = {
  token: localStorage.getItem("userToken"),
};
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: headers,
});

export default axiosInstance;
