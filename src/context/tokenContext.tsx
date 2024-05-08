/** @format */

import React, { createContext, useState, ReactNode, useEffect } from "react";

interface TokenContextProps {
  children: ReactNode;
}

interface TokenContextValue {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

export const TokenContext = createContext<TokenContextValue>({
  token: "",
  setToken: () => {},
});

const TokenContextProvider: React.FC<TokenContextProps> = (props) => {
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    const storedToken = localStorage.getItem("userToken");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);
  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {props.children}
    </TokenContext.Provider>
  );
};

export default TokenContextProvider;
