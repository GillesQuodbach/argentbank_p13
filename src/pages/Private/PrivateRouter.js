import { PageNotFound } from "../Public/PageNotFound/PageNotFound";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { PrivateLayout } from "./PrivateLayout";
import { Profile } from "./Profile/Profile";

export const PrivateRouter = () => {
  return (
    <Routes>
      <Route element={<PrivateLayout />}>
        <Route path="profile/" element={<Profile />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};