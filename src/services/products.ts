/** @format */

import axios from "axios";
const Base_URl = "https://ecommerce.routemisr.com";
export const getProducts = async () => {
  const response = await axios.get(`${Base_URl}/api/v1/products`);
  return response.data;
};
