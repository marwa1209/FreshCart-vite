/** @format */

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const getProducts = async () => {
  const response = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/api/v1/products`
  );
  return response.data;
};

//getProducts
export function useFeaturedProducts() {
  return useQuery({ queryKey: ["featured-products"], queryFn: getProducts });
}
