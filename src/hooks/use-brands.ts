/** @format */

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const Base_URl = "https://ecommerce.routemisr.com";
export const getBrands = async () => {
  const response = await axios.get(`${Base_URl}/api/v1/Brands`);
  return response.data;
};

//getBrands
export function useBrands() {
  return useQuery({ queryKey: ["categories"], queryFn: getBrands });
}
