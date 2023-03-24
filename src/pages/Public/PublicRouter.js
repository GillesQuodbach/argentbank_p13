import React from "react";
import { Home } from "pages/Public/Home/Home";
import { PageNotFound } from "pages/Public/PageNotFound/PageNotFound";
import { Login } from "pages/Public/Login/Login";
import { PublicLayout } from "pages/Public/PublicLayout";
import { Routes, Route } from "react-router-dom";

export const PublicRouter = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<Home />} />

        <Route path="login" element={<Login />} />

        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};
