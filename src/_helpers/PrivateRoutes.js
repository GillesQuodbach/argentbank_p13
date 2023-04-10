import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import React from "react";
import { accountService } from "../_services/account_service";

const PrivateRoutes = ({ children }) => {
  const userStatus = useSelector((state) => state.auth.status);
  const userIsLogged = useSelector((state) => state.auth.isLogged);
  if (
    accountService.getToken() ||
    accountService.getSessionStorageToken() ||
    userStatus === 200 ||
    userIsLogged === true
  ) {
    return children;
  }

  return <Navigate to="/login" />;
};

export default PrivateRoutes;