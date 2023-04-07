import s from "./style.module.css";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { editInput } from "../../app/features/user/userSlice";

const handleFirstName = () => {
  console.log("handleFirstName");
};
const handleLastName = () => {
  console.log("handleLastName");
};

function UserInput() {
  const dispatch = useDispatch();

  const handleSaveEdit = () => {
    console.log("save edit");
    dispatch(editInput());
  };

  const handleCancelEdit = () => {
    console.log("cancel edit");
    dispatch(editInput());
  };

  const firstName = useSelector((state) => state.user.userInfo.body.firstName);
  console.log(firstName);
  const lastName = useSelector((state) => state.user.userInfo.body.lastName);
  console.log(lastName);
  const isEditable = useSelector((state) => state.user.isInputsEditable);

  return (
    <>
      <div className={s.user_inputs_container}>
        <input
          className={s.user_input_firstName}
          type="text"
          name="firstName"
          id="firstName"
          value={firstName}
          onChange={handleFirstName}
        />
        <input
          className={s.user_input_lastName}
          type="text"
          name="lastName"
          id="lastName"
          value={lastName}
          onChange={handleLastName}
        />
      </div>
      <div className={s.user_button_container}>
        <button onClick={handleSaveEdit} className={s.save_button}>
          Save
        </button>
        <button onClick={handleCancelEdit} className={s.cancel_button}>
          Cancel
        </button>
      </div>
    </>
  );
}

export default UserInput;