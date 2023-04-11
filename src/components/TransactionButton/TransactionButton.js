import s from "./style.module.css";
import { useNavigate } from "react-router-dom";

import React from "react";

function TransactionButton(props) {
  const navigate = useNavigate();
  // console.log(props);
  const handleTransaction = (e) => {
    e.preventDefault();

    // console.log(account);
    console.log("handleTransaction");
    navigate(`/user/profile/${props.id}`);
  };

  return (
    <button onClick={handleTransaction} className={s.transaction_button}>
      View transactions
    </button>
  );
}

export default TransactionButton;