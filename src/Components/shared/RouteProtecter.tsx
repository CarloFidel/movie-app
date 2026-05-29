import React, { use } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { Navigate } from "react-router";

function RouteProtecter({ children }: { children: React.ReactNode }) {
  const authContext = use(AuthContext);

  const { isAuth } = authContext!;

  if (!isAuth) return <Navigate to="/register" />;
  return children;
}

export default RouteProtecter;
