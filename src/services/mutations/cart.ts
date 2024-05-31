/** @format */
import axiosInstance from "@/config/axios.config";
//add
export const addToCart = async (id: number) => {
  const response = await axiosInstance.post(
    `${import.meta.env.VITE_BASE_URL}/api/v1/cart`,
    { productId: id }
  );
  return response.data;
};

//delete
export const deleteFromCart = async (id: number) => {
  const response = await axiosInstance.delete(
    `${import.meta.env.VITE_BASE_URL}/api/v1/cart/${id}`
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
