/** @format */

import axios from "axios";

const Base_URL = "https://ecommerce.routemisr.com";
export const getProducts = async () => {
  const response = await axios.get(`${Base_URL}/api/v1/products`);
  return response.data;
};
export const getProductsInfinite = async ({pageParam}:{pageParam:number}) => {
  const response = await axios.get(
    `${Base_URL}/api/v1/products?page=${pageParam}`
  );
  return response.data;
};
