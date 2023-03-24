import { PageNotFound } from "pages/Public/PageNotFound/PageNotFound";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { AdminLayout } from "./AdminLayout";
import { Profile } from "./Profile/Profile";

export const AdminRouter = () => {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};
