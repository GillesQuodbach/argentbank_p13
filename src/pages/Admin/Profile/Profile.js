import React, {useEffect,useState} from "react";
import s from "./style.module.css";
import {userService} from "../../../_services/user.service";

export function Profile() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    useEffect(() => {
        userService.getUserProfile()
            .then(res => {
                console.log(res.data) // réponse complète
                console.log(res.data.body.firstName)
                setFirstName(res.data.body.firstName)
                console.log(res.data.body.lastName)
                setLastName(res.data.body.lastName)
            })

            .catch(err => console.log(err))
    }, []);
  return (
    <main className={`${s.main} ${s.bg_dark}`}>
      <div className={s.header}>
        <h1>
          Welcome back
          <br />
            {firstName} {lastName}
        </h1>
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
