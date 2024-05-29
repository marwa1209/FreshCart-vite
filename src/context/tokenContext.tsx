/** @format */

import React, { createContext, useState, ReactNode, useEffect } from "react";

interface TokenContextProps {
  children: ReactNode;
}

interface TokenContextValue {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  userdata: any;
  setuserData: any;
}

export const TokenContext = createContext<TokenContextValue>({
  token: "",
  setToken: () => {},
  userdata: null,
  setuserData: null,
});

const TokenContextProvider: React.FC<TokenContextProps> = (props) => {
  const [token, setToken] = useState<string | null>(null);
  const [userdata, setuserData] = useState<string | null>(null);
  useEffect(() => {
    const storedToken = localStorage.getItem("userToken");
    const storedData = localStorage.getItem("userData");
    if (storedToken) {
      setToken(storedToken);
      setuserData(storedData);
    }
  }, []);
  return (
    <TokenContext.Provider value={{ token, setToken, userdata, setuserData }}>
      {props.children}
    </TokenContext.Provider>
  );
};

export default TokenContextProvider;
