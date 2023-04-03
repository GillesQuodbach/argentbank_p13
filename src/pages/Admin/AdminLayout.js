import React from "react";
import { AdminHeader } from "./AdminHeader/AdminHeader";
import { Outlet } from "react-router-dom";
import { Footer } from "components/Footer/Footer";

export const AdminLayout = () => {
  return (
    <div className="adminLayout">
      <AdminHeader />
      <Outlet />
      <Footer />
    </div>
  );
};