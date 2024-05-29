/** @format */

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export const getCategories = async () => {
  const response = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/api/v1/categories`
  );
  return response.data;
};

//getCategories
export function useCategories() {
  return useQuery({ queryKey: ["categories"], queryFn: getCategories });
}