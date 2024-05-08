/** @format */

import axios from "axios";
const Base_URl = "https://ecommerce.routemisr.com";
export const Register = async (data: any) => {
  const response = await axios.post(`${Base_URl}/api/v1/auth/signup`, data);
  return response.data;
};
export const SignIn = async (data: any) => {
  const response = await axios.post(`${Base_URl}/api/v1/auth/signin`, data);
  return response.data;
};