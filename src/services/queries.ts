/** @format */
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getCategories, getCategoriesInfinite } from "./categories";
import { getProductsInfinite ,getProducts } from "./products";
import { getCart } from "./cart";

//getCategories
export function useCategories() {
  return useQuery({ queryKey: ["categories"], queryFn: getCategories });
}
//getProducts
export function useProducts() {
  return useQuery({ queryKey: ["featuredProducts"], queryFn: getProducts });
}
//getCategories infinite
export function useCategoriesinfinite() {
  return useInfiniteQuery({
    queryKey: ["AllCategories"],
    queryFn: ({ pageParam }) => getCategoriesInfinite({ pageParam }),
    initialPageParam: 1,
    getPreviousPageParam: (firstPage: any) => {
      if (firstPage.metadata.currentPage <= firstPage.metadata.numberOfPages) {
        return firstPage.metadata.currentPage - 1;
      }
      return undefined;
    },
    getNextPageParam: (lastPage: any) => {
      if (lastPage.metadata.currentPage !== lastPage.metadata.numberOfPages) {
        return lastPage.metadata.currentPage + 1;
      }
      return undefined;
    },
  });
}
//GetproductsInfinite
export function useProductsInfinite() {
  return useInfiniteQuery({
    queryKey: ["Products"],
    queryFn: ({ pageParam }) => getProductsInfinite({ pageParam }),
    initialPageParam: 1,
    getPreviousPageParam: (firstPage: any) => {
      if (firstPage.metadata.currentPage <= firstPage.metadata.numberOfPages) {
        return firstPage.metadata.currentPage - 1;
      }
      return undefined;
    },
    getNextPageParam: (lastPage: any) => {
      if (lastPage.metadata.currentPage !== lastPage.metadata.numberOfPages) {
        return lastPage.metadata.currentPage + 1;
      }
      return undefined;
    },
  });
}

// ******************Cart***************************

//GetCart
export function useGetCart() {
  return useQuery({ queryKey: ["cartItems"], queryFn: getCart });
}
