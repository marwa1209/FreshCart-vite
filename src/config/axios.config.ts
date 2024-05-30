/** @format */

import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

instance.interceptors.request.use(
  function (config) {
      let token = localStorage.getItem("userToken");
      config.headers["Accept"] = "*/*";
      config.headers["Content-Type"] = "application/json";
      if (token) {
          config.headers["token"] = `${token}`;
      }
      return config;
  },
  (error) => {
      return Promise.reject(error);
  }
);

export default instance;
