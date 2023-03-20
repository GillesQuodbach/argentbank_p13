import React from "react";
import logo from "../../assets/img/argentBankLogo.png";
import s from "./style.module.css";

export function Header() {
  return (
    <nav className={s.main_nav}>
      <a className={s.main_nav_logo} href="./index.html">
        <img
          className={s.main_nav_logo_image}
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className={s.sr_only}>Argent Bank</h1>
      </a>
      <div>
        <a className={s.main_nav_item} href="./sign-in.html">
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
    </nav>
  );
}
