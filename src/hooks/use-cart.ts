/** @format */

import axiosInstance from "@/config/axios.config";
import { useQuery } from "@tanstack/react-query";

//get
export const getCart = async () => {
  const response = await axiosInstance.get(
    `${import.meta.env.VITE_BASE_URL}/api/v1/cart`
  );
  return response.data;
};
//GetCart
export function useCart() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["cartItems"],
    queryFn: getCart,
  });
  const cartId = data?.data._id ?? null;
  return { cartId, isPending, isError, error, data };
}
