/** @format */

import { useInfiniteQuery } from "@tanstack/react-query";
import axiosInstance from "@/config/axios.config";

export const getProductsInfinite = async ({
  pageParam,
}: {
  pageParam: number;
}) => {
  const response = await axiosInstance.get(
    `${import.meta.env.VITE_BASE_URL}/api/v1/products?page=${pageParam}`
  );
  return response.data;
};
export function useProducts() {
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
