import { Footer } from "../../components/Footer/Footer";
import React from "react";
import { PublicHeader } from "../../components/PublicHeader/PublicHeader";
import { Outlet } from "react-router-dom";

export const PublicLayout = () => {
  return (
    <div className="PublicLayout">
      <PublicHeader />
      <Outlet />
      <Footer />
    </div>
  );
};