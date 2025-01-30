import { ReactNode, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router";

type ProtectedRouteProps = {
  children: ReactNode;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [token] = useLocalStorage("token", "");
  const navigate = useNavigate();

  const isAuthenticated = token.length !== 0;

  useEffect(() => {
    if (!isAuthenticated) {
      console.log("Token:", token);
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? <>{children}</> : null;
};
