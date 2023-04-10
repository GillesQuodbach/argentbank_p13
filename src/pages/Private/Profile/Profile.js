import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./style.module.css";
import {
  fetchUser,
  editInput,
  initialEditInput,
} from "../../../app/features/user/userSlice";
import { userLoggedIn } from "../../../app/features/auth/authSlice";
import UserInput from "../../../components/UserInput/UserInput";

export function Profile() {
  // const [isEditable, setIsEditable] = useState(false);
  const userSlice = useSelector((state) => state.user);
  const userInfos = useSelector((state) => state.user.userInfo);
  const isEditable = useSelector((state) => state.user.isInputsEditable);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editInput());
    // console.log(isEditable);
  };

  useEffect(() => {
    dispatch(fetchUser());
    dispatch(initialEditInput());
    dispatch(userLoggedIn());
  }, [fetchUser]);

  return (
    <main className={`${s.main} ${s.bg_dark}`}>
      <div className={s.header}>
        {userSlice.isLoading ? (
          <p>Veuillez patienter ...</p>
        ) : userSlice.error ? (
          <p>Erreur</p>
        ) : !isEditable ? (
          <>
            <h1 className={s.user_infos_container}>
              Welcome back
              <br />
              {userInfos?.body?.firstName} {userInfos?.body?.lastName}
            </h1>
            <button onClick={handleEdit} className={s.edit_button}>
              Edit Name
            </button>
          </>
        ) : (
          <>
            <h1 className={s.user_infos_editable_container}>Welcome back</h1>
            <UserInput />
          </>
        )}
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