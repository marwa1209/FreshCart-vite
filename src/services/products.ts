/** @format */

import axios from "axios";

const Base_URl = "https://ecommerce.routemisr.com";

export const getProducts = async (page: number) => {
  const response = await axios.get(`${Base_URl}/api/v1/products?page=${page}`);
  return response.data;
};