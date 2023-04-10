import React, { useEffect } from "react";
import logo from "../../../assets/img/argentBankLogo.png";
import { NavLink } from "react-router-dom";
import s from "./style.module.css";
import { userLogOut } from "../../../app/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../../app/features/user/userSlice";

export function PrivateHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(userLogOut());
    navigate("/");
  };
  useEffect(() => {
    dispatch(fetchUser());
  }, [fetchUser]);
  const userName = useSelector((state) => state.user.userInfo.body);

  return (
    <nav className={s.main_nav}>
      <NavLink to="/user/home" className={s.main_nav_logo}>
        <img
          className={s.main_nav_logo_image}
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className={s.sr_only}>Argent Bank</h1>
      </NavLink>
      <div>
        <NavLink to="/user/profile" className={s.main_nav_user}>
          <i className={`fa fa-user-circle ${s.header_signin_link}`}></i>
          {userName?.firstName}
        </NavLink>
        <NavLink to="/" className={s.main_nav_item} onClick={logout}>
          <i
            className={`fa-solid fa-arrow-right-from-bracket ${s.header_signin_link}`}
          ></i>
          LogOut
        </NavLink>
      </div>
    </nav>
  );
}