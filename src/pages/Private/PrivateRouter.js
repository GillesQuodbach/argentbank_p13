import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateLayout from "./PrivateLayout";
import { Profile } from "./Profile/Profile";
import { Home } from "../Public/Home/Home";
import { PageNotFound } from "../Public/PageNotFound/PageNotFound";
import Transaction from "./Transaction/Transaction";

function PrivateRouter(props) {
  return (
    <Routes>
      <Route element={<PrivateLayout />}>
        <Route index element={<Profile />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/profile/transaction" element={<Transaction />} />
        <Route path="/*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default PrivateRouter;