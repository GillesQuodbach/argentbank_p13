import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import s from "./style.module.css";
import { accountService } from "../../../_services/account_service";
import {addToken,userLoggedIn} from "../../../app/features/auth/authSlice";


export function Login() {

  //Affichage du token
  const token = useSelector((state => state.auth.userToken))
  console.log(token);

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginInput, setLoginInput] = useState({
    email: "tony@stark.com",
    password: "password123",
  });
  const [isBoxChecked, setBoxIsChecked] = useState(false);
  // console.log(isBoxChecked);
  const onChange = (e) => {
    setLoginInput({
      ...loginInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckbox = () => {
    setBoxIsChecked(!isBoxChecked);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(loginInput);
    accountService
      .login(loginInput)
      .then((res) => {
        const response = res.data;
        console.log(response);
        const token = res.data.body.token;
        accountService.saveToken();
        dispatch(addToken(token))
        dispatch(userLoggedIn())
        navigate("/user/profile");
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
              value={loginInput.email}
              onChange={onChange}
            />
          </div>
          <div className={s.input_wrapper}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={loginInput.password}
              onChange={onChange}
            />
          </div>
          <div className={s.input_remember}>
            <input
              type="checkbox"
              id="remember_me"
              name="checkbox"
              checked={isBoxChecked}
              onChange={handleCheckbox}
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