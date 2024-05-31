/** @format */
import axiosInstance from "@/config/axios.config";

export const cashorder = async (cartId: number, data: any) => {
  const response = await axiosInstance.post(
    `${
      import.meta.env.VITE_BASE_URL
    }/api/v1/orders/checkout-session/${cartId}?url=http://localhost:5173`,
    { data }
  );
  return response.data;
};
