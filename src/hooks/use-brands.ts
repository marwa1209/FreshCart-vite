/** @format */

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export const getBrands = async () => {
  const response = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/api/v1/Brands`
  );
  return response.data;
};

//getBrands
export function useBrands() {
  return useQuery({ queryKey: ["categories"], queryFn: getBrands });
}
