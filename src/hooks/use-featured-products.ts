/** @format */

import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/config/axios.config";
export const getProducts = async (params?: any) => {
  const response = await axiosInstance.get(
    `${import.meta.env.VITE_BASE_URL}/api/v1/products`,
    { params: { limit: 12, ...params } }
  );
  return response.data;
};

//getProducts
export function useFeaturedProducts(params?: any) {
  return useQuery({
    queryKey: ["featured-products", params],
    queryFn: () => getProducts(params),
  });
}
