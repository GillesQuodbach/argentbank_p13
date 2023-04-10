import React from "react";
import { Routes, Route } from "react-router-dom";
import PublicLayout from "./PublicLayout";
import { Home } from "./Home/Home";
import { Login } from "./Login/Login";
import { Profile } from "../Private/Profile/Profile";
import { PageNotFound } from "./PageNotFound/PageNotFound";

const PublicRouter = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default PublicRouter;