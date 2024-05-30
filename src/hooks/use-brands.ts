/** @format */

import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/config/axios.config";
export const getBrands = async () => {
  const response = await axiosInstance.get(
    `${import.meta.env.VITE_BASE_URL}/api/v1/Brands`
  );
  return response.data;
};

//getBrands
export function useBrands() {
  return useQuery({ queryKey: ["categories"], queryFn: getBrands });
}
