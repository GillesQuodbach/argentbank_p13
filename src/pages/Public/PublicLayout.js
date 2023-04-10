import React from "react";
import { Outlet } from "react-router-dom";
import { PublicHeader } from "../../components/PublicHeader/PublicHeader";
import { Footer } from "../../components/Footer/Footer";

const PublicLayout = () => {
  return (
    <div className="publicLayout">
      <PublicHeader />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PublicLayout;