/** @format */

import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/config/axios.config";
export const getCategories = async () => {
  const response = await axiosInstance.get(
    `${import.meta.env.VITE_BASE_URL}/api/v1/categories`
  );
  return response.data;
};

//getCategories
export function useCategories() {
  return useQuery({ queryKey: ["categories"], queryFn: getCategories });
}