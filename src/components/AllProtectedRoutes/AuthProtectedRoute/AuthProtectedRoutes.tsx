/** @format */

import { FC } from "react";
import { Navigate } from "react-router-dom";
interface ProtectedRoutesProps {
  children: React.ReactNode;
}

const AuthProtectedRoutes: FC<ProtectedRoutesProps> = ({ children }) => {
  if (localStorage.getItem("userToken") != null) {
    return <Navigate to="/home" />;
  }
  return <>{children}</>;
};

interface UnprotectedRoutesProps {
  children: React.ReactNode;
}

const LayoutProtectedRoutes: FC<UnprotectedRoutesProps> = ({ children }) => {
  if (localStorage.getItem("userToken") == null) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};

export { AuthProtectedRoutes, LayoutProtectedRoutes };
