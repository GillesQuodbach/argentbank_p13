import React from "react";
import s from "./style.module.css";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

function Transaction() {
  const navigate = useNavigate();
  const allStoredAccountData = useSelector((state) => state.user.accounts);

  const urlId = useParams();
  const urlIdToNumber = parseInt(urlId.accountId);
  const storedAccountIndex = urlIdToNumber - 1;

  const currentAccountData = allStoredAccountData[storedAccountIndex];
  console.log(currentAccountData);

  const handleGoToProfile = () => {
    navigate("/user/profile");
  };

  return (
    <section className={s.account_container}>
      <div className={s.account}>
        <div id="account1" className={s.account_content_wrapper}>
          <h3 className={s.account_title}>Argent Bank Checking (x8349)</h3>
          <p className={s.account_amount}>$2,082.79</p>
          <p className={s.account_amount_description}>Available Balance</p>
        </div>
        <div className={`${s.account_content_wrapper} ${s.cta}`}>
          <button onClick={handleGoToProfile} className={s.transaction_button}>
            Back To Profile
          </button>
        </div>
      </div>
    </section>
  );
}

export default Transaction;