import { Footer } from "components/Footer/Footer";
import React from "react";
import { Header } from "components/Header/Header";
import { Outlet } from "react-router-dom";

export const PublicLayout = () => {
  return (
    <div className="PublicLayout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
