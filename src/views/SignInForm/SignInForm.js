import React from "react";
import s from "./style.module.css";

export function SignInForm() {
  return (
    <main className={`${s.main} ${s.bg_dark}`}>
      <section className={s.sign_in_content}>
        <i className="fa fa-user_circle sign_in_icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className={s.input_wrapper}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className={s.input_wrapper}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className={s.input_remember}>
            <input type="checkbox" id="remember_me" />
            <label htmlFor="remember_me">Remember me</label>
          </div>
          {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
          <a href="./user.html" className={s.sign_in_button}>
            Sign In
          </a>
          {/* <!-- SHOULD BE THE BUTTON BELOW -->
      <!-- <button className={s.sign-in-button}>Sign In</button> -->
      <!--  --> */}
        </form>
      </section>
    </main>
  );
}
