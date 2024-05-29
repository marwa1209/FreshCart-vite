/** @format */

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Base_URL = "https://ecommerce.routemisr.com";
export const getProducts = async () => {
  const response = await axios.get(`${Base_URL}/api/v1/products`);
  return response.data;
};

//getProducts
export function useFeaturedProducts() {
  return useQuery({ queryKey: ["featured-products"], queryFn: getProducts });
}
