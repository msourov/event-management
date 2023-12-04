import React from "react";
import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.login.isLoggedIn);

  return isAuthenticated ? (
    <Route element={children} />
  ) : (
    <Navigate to="/login" replace />
  );
};
