/** @format */

import { useMutation } from "@tanstack/react-query";
import { Register, SignIn } from "./auth";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { TokenContext } from "@/context/tokenContext";

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
  let { setToken, setuserData} = useContext(TokenContext);
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: any) => SignIn(data),
    onSuccess: (data) => {
      localStorage.setItem("userToken", data.token);
      localStorage.setItem("userData", JSON.stringify(data.user));
      let token = localStorage.getItem("userToken");
      let userData: any = localStorage.getItem("userData");
      userData = JSON.parse(userData);
      setuserData(userData);
      setToken(token);
      navigate("/home");
    },
  });
}
