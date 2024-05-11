/** @format */
import { useInfiniteQuery, useQuery, type InfiniteData, type QueryFunctionContext } from "@tanstack/react-query";
import { getCategories } from "./categories";
import { getProducts } from "./products";
import { getCart } from "./cart";

//getCategories
export function useCategories() {
  return useQuery({ queryKey: ["categories"], queryFn:getCategories});
}

//Getproducts

export function useProducts() {
  return useInfiniteQuery<
    any,
    Error,
    InfiniteData<any, unknown>,
    string[],
    number
  >({
    queryKey: ["Products"],
    queryFn: async ({ pageParam = 1 }: QueryFunctionContext<string[]>) => {
      const pageNumber: number = pageParam as number; // Ensure pageParam is treated as number
      const response = await getProducts(pageNumber);
      return response;
    },
    getNextPageParam: (lastPage) => {
      if (lastPage && lastPage.info) {
        const nextPage = lastPage.info.page + 1;
        return nextPage <= lastPage.info.totalPages ? nextPage : undefined;
      }
      return undefined;
    },
    initialData: { pages: [], pageParams: [1] },
    initialPageParam: 1,
  });
}
// ******************Cart***************************

//GetCart
export function useGetCart() {
  return useQuery({ queryKey: ["cartItems"], queryFn: getCart });
}
