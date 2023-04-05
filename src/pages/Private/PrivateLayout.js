import React from "react";
import { PrivateHeader } from "./PrivateHeader/PrivateHeader";
import { Footer } from "../../components/Footer/Footer";
import {Profile} from "./Profile/Profile"

export const PrivateLayout = () => {
  return (
    <div className="adminLayout">
      <PrivateHeader />
      <Profile />
      <Footer />
    </div>
  );
};