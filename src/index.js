import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./views/Home/Home";
import { PageNotFound } from "./views/PageNotFound/PageNotFound";
import { SignInForm } from "./views/SignInForm/SignInForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignInForm />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
