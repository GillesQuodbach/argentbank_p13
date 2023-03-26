import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { accountService } from "_services/account_service";
import s from "./style.module.css";
import {userService} from "../../../_services/user.service";

export function Login() {
  let navigate = useNavigate();





  const [credentials, setCredentials] = useState({
    email: "tony@stark.com",
    password: "password123",
  });

  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(credentials);
    accountService.login(credentials)
      .then((res) => {
        //reponse complète
        console.log(res);
        //token dans la reponse
        console.log(res.data.body.token);
        accountService.saveToken(res.data.body.token);
        navigate("/admin/profile");
      })
      .catch((error) => console.log(error));
  };

  return (
    <main className={`${s.main} ${s.bg_dark}`}>
      <section className={s.sign_in_content}>
        <i className="fa fa-user_circle sign_in_icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={onSubmit}>
          <div className={s.input_wrapper}>
            <label htmlFor="email">Username</label>
            <input
              type="text"
              name="email"
              id="email"
              value={credentials.email}
              onChange={onChange}
            />
          </div>
          <div className={s.input_wrapper}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={credentials.password}
              onChange={onChange}
            />
          </div>
          <div className={s.input_remember}>
            <input
              type="checkbox"
              id="remember_me"
              name="checkbox"
              checked={credentials.isChecked}
              onChange={onChange}
            />
            <label htmlFor="remember_me">Remember me</label>
          </div>
          {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
          <button type="submit" className={s.sign_in_button}>
            Sign In
          </button>
          {/* <!-- SHOULD BE THE BUTTON BELOW -->
      <!-- <button className={s.sign-in-button}>Sign In</button> -->
      <!--  --> */}
        </form>
      </section>
    </main>
  );
}
