/** @format */

import { useMutation } from "@tanstack/react-query";
import { Register, SignIn } from "./auth";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { TokenContext } from "@/context/tokenContext";
import { addToCart, deleteFromCart, updateProductQuan } from "./cart";

//register
export function useRegister() {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: any) => Register(data),
    onSuccess: (data) => {
      console.log(data);
      navigate("/login");
    },
  });
}
//login
export function useSignIn() {
  let { setToken } = useContext(TokenContext);
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: any) => SignIn(data),
    onSuccess: (data) => {
      localStorage.setItem("userToken", data.token);
      let token = localStorage.getItem("userToken");
      setToken(token);
      navigate("/home");
    },
  });
}
// ******************Cart***************************
export function useaddToCart() {
  return useMutation({
    mutationFn: (id: number) => addToCart(id),
  });
}
export function usedeleteFromCart() {
  return useMutation({
    mutationFn: (id: any) => deleteFromCart(id),
  });
}
export function useupdateProductQuan() {
  return useMutation({
    mutationFn: ({ id, count }: { id: number; count: number }) =>
      updateProductQuan(id, count),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
}
