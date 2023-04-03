import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./app/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PublicRouter } from "pages/Public/PublicRouter";
import { AdminRouter } from "pages/Admin/AdminRouter";
import AuthGuard from "_helpers/AuthGuard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<PublicRouter />} />
        <Route
          path="/admin/*"
          element={
            <AuthGuard>
              <AdminRouter />
            </AuthGuard>
          }
        />
      </Routes>
    </BrowserRouter>
  </Provider>
);