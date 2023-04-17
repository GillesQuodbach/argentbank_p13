import React, { useEffect } from "react";
import chatIcon from "../../../assets/img/icon-chat.png";
import moneyIcon from "../../../assets/img/icon-money.png";
import featureIcon from "../../../assets/img/icon-security.png";
import s from "./style.module.css";
import { accountService } from "../../../_services/account_service";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export function Home() {
  const navigate = useNavigate();
  const userStatus = useSelector((state) => state.auth.status);
  const userIsLogged = useSelector((state) => state.auth.isLogged);

  useEffect(() => {
    if (
      accountService.getToken() ||
      accountService.getSessionStorageToken() ||
      userStatus === 200 ||
      userIsLogged === true
    ) {
      // console.log("WE HAVE A TOKEN !!!!");
      navigate("/user/home");
    } else {
      // console.log("WE HAVE NO TOKEN");
    }
  }, []);

  return (
    <main className={s.home_container}>
      <div className={s.hero}>
        <section className={s.hero_content}>
          <h2 className={s.sr_only}>Promoted Content</h2>
          <p className={s.subtitle}>No fees.</p>
          <p className={s.subtitle}>No minimum deposit.</p>
          <p className={s.subtitle}>High interest rates.</p>
          <p className={s.text}>
            Open a savings account with Argent Bank today!
          </p>
        </section>
      </div>
      <section className={s.features}>
        <h2 className={s.sr_only}>Features</h2>
        <div className={s.feature_item}>
          <img src={chatIcon} alt="Chat Icon" className={s.feature_icon} />
          <h3 className={s.feature_item_title}>You are our #1 priority</h3>
          <p>
            Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.
          </p>
        </div>
        <div className={s.feature_item}>
          <img src={moneyIcon} alt="Chat Icon" className={s.feature_icon} />
          <h3 className={s.feature_item_title}>
            More savings means higher rates
          </h3>
          <p>
            The more you save with us, the higher your interest rate will be!
          </p>
        </div>
        <div className={s.feature_item}>
          <img src={featureIcon} alt="Chat Icon" className={s.feature_icon} />
          <h3 className={s.feature_item_title}>Security you can trust</h3>
          <p>
            We use top of the line encryption to make sure your data and money
            is always safe.
          </p>
        </div>
      </section>
    </main>
  );
}
