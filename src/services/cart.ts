/** @format */

import axios from "axios";
const Base_URl = "https://ecommerce.routemisr.com";
let headers = {
  headers: {
    token: localStorage.getItem("userToken"),
  },
};
//add
export const addToCart = async (id: number) => {
  const response = await axios.post(`${Base_URl}/api/v1/cart`,
    {productId: id},
    headers,
  );
  return response.data;
};
//get
export const getCart = async () => {
  const response = await axios.get(`${Base_URl}/api/v1/cart`, headers);
  return response.data;
};
//delete
export const deleteFromCart = async (id: number) => {
  const response = await axios.delete(`${Base_URl}/api/v1/cart/${id}`, 
    headers,
  );
  return response.data;
};
//update
export const updateProductQuan = async (id: any, count: number) => {
  const response = await axios.put(`${Base_URl}/api/v1/cart/${id}`, 
    {count},
    headers,
  );
  return response.data;
};
