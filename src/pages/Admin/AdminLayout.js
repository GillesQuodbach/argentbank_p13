import React from "react";
import { Header } from "components/Header/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "components/Footer/Footer";

export const AdminLayout = () => {
  return (
    <div className="adminLayout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
