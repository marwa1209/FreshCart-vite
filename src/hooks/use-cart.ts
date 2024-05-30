/** @format */

import axiosInstance from "@/config/axios.config";
import { useQuery } from "@tanstack/react-query";

//add
export const addToCart = async (id: number) => {
  const response = await axiosInstance.post(
    `${import.meta.env.VITE_BASE_URL}/api/v1/cart`,
    { productId: id }
  );
  return response.data;
};
//get
export const getCart = async () => {
  const response = await axiosInstance.get(
    `${import.meta.env.VITE_BASE_URL}/api/v1/cart`
  );
  return response.data;
};
//delete
export const deleteFromCart = async (id: number) => {
  const response = await axiosInstance.delete(
    `${process.env.BASE_URL}/api/v1/cart/${id}`
  );
  return response.data;
};
//update
export const updateProductQuan = async (id: any, count: number) => {
  const response = await axiosInstance.put(
    `${import.meta.env.VITE_BASE_URL}/api/v1/cart/${id}`,
    { count }
  );
  return response.data;
};
//GetCart
export function useGetCart() {
  return useQuery({ queryKey: ["cartItems"], queryFn: getCart });
}
