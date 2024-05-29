/** @format */

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

let headers = {
  headers: {
    token: localStorage.getItem("userToken"),
  },
};
//add
export const addToCart = async (id: number) => {
  const response = await axios.post(
    `${import.meta.env.VITE_BASE_URL}/api/v1/cart`,
    { productId: id },
    headers
  );
  return response.data;
};
//get
export const getCart = async () => {
  const response = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/api/v1/cart`,
    headers
  );
  return response.data;
};
//delete
export const deleteFromCart = async (id: number) => {
  const response = await axios.delete(
    `${process.env.BASE_URL}/api/v1/cart/${id}`,
    headers
  );
  return response.data;
};
//update
export const updateProductQuan = async (id: any, count: number) => {
  const response = await axios.put(
    `${import.meta.env.VITE_BASE_URL}/api/v1/cart/${id}`,
    { count },
    headers
  );
  return response.data;
};
//GetCart
export function useGetCart() {
  return useQuery({ queryKey: ["cartItems"], queryFn: getCart });
}
