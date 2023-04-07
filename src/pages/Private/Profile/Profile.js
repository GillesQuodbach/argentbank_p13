import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./style.module.css";
import { fetchUser } from "../../../app/features/user/userSlice";

export function Profile() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  const userSlice = useSelector((state) => state.user);
  console.log(userSlice);

  const userInfos = useSelector((state) => state.user.userInfo);
  console.log("*********", userInfos);

  // const firstName = useSelector((state) => state.user.userInfo.body.firstName);
  //

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [fetchUser]);

  return (
    <main className={`${s.main} ${s.bg_dark}`}>
      <div className={s.header}>
        {userSlice.isLoading ? (
          <p>Veuillez patienter ...</p>
        ) : userSlice.error ? (
          <p>Erreur</p>
        ) : (
          <h1 className={s.user_infos_container}>
            Welcome back
            <br />
            {userInfos?.body?.firstName} {userInfos?.body?.lastName}
          </h1>
        )}
        {/*{userSlice.userInfo.body.firstName}*/}
        <button className={s.edit_button}>Edit Name</button>
      </div>

      <h2 className={s.sr_only}>Accounts</h2>

      <section className={s.account}>
        <div className={s.account_content_wrapper}>
          <h3 className={s.account_title}>Argent Bank Checking (x8349)</h3>
          <p className={s.account_amount}>$2,082.79</p>
          <p className={s.account_amount_description}>Available Balance</p>
        </div>
        <div className={`${s.account_content_wrapper} ${s.cta}`}>
          <button className={s.transaction_button}>View transactions</button>
        </div>
      </section>

      <section className={s.account}>
        <div className={s.account_content_wrapper}>
          <h3 className={s.account_title}>Argent Bank Savings (x6712)</h3>
          <p className={s.account_amount}>$10,928.42</p>
          <p className={s.account_amount_description}>Available Balance</p>
        </div>
        <div className={`${s.account_content_wrapper} ${s.cta}`}>
          <button className={s.transaction_button}>View transactions</button>
        </div>
      </section>

      <section className={s.account}>
        <div className={s.account_content_wrapper}>
          <h3 className={s.account_title}>Argent Bank Credit Card (x8349)</h3>
          <p className={s.account_amount}>$184.30</p>
          <p className={s.account_amount_description}>Current Balance</p>
        </div>
        <div className={`${s.account_content_wrapper} ${s.cta}`}>
          <button className={s.transaction_button}>View transactions</button>
        </div>
      </section>
    </main>
  );
}