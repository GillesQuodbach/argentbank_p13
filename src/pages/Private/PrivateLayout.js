import React from "react";
import { Outlet } from "react-router-dom";
import { PrivateHeader } from "./PrivateHeader/PrivateHeader";
import { Footer } from "../../components/Footer/Footer";

const PrivateLayout = () => {
  return (
    <div className="privateLayout">
      <PrivateHeader />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PrivateLayout;