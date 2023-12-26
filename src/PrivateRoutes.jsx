import React from "react";
import { useSelector } from "react-redux";
import { Route, Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const isAuthenticated = useSelector((state) => state.login.isLoggedIn);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoutes;
