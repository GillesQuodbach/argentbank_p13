import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { PrivateLayout } from "../pages/Private/PrivateLayout";
import React from "react";
import { accountService } from "../_services/account_service";

const useAuth = () => {
  const userStatus = useSelector((state) => state.auth.status);
  if (accountService.getToken() || userStatus === 200) {
    return true;
  } else {
    return false;
  }
};
const PrivateRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <PrivateLayout /> : <Navigate to={"/login"} />;
};

export default PrivateRoutes;