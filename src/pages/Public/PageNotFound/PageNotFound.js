import React from "react";
import s from "./style.module.css";
import { useNavigate } from "react-router-dom";

export function PageNotFound() {
  const navigate = useNavigate();

  const handleHomeButton = () => {
    navigate("/home");
  };

  return (
    <div className={s.notfound_container}>
      <div className={s.notfound_text}>404</div>
      <div className={s.notfound_text}>-</div>
      <div className={s.notfound_text}>Page Not Found</div>
      <button onClick={handleHomeButton} className={s.notfound_button}>
        Return Home
      </button>
    </div>
  );
}
