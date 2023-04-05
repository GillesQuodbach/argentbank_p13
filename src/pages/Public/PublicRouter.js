import React from "react";
import { Home } from "./Home/Home";
import { PageNotFound } from "./PageNotFound/PageNotFound";
import { Login } from "./Login/Login";
import { PublicLayout } from "./PublicLayout";
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