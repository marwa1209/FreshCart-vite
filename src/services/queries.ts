/** @format */
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "./categories";
import { getProducts } from "./products";
import { getCart } from "./cart";

//getCategories
export function useCategories() {
  return useQuery({ queryKey: ["categories"], queryFn:getCategories});
}

//Getproducts
export function useProducts() {
  return useQuery({ queryKey: ["Products"], queryFn: getProducts });
}

// ******************Cart***************************

//GetCart
export function useGetCart() {
  return useQuery({ queryKey: ["cartItems"], queryFn: getCart });
}
