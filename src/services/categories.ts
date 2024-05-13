/** @format */

import axios from "axios";
const Base_URl = "https://ecommerce.routemisr.com";
export const getCategories = async () => {
  const response = await axios.get(`${Base_URl}/api/v1/categories`);
  return response.data;
};
export const getCategoriesInfinite = async ({
  pageParam,
}: {
  pageParam: number;
}) => {
  const response = await axios.get(
    `${Base_URl}/api/v1/categories?page=${pageParam}`
  );
  return response.data;
};
