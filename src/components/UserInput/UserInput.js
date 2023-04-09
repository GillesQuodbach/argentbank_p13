import s from "./style.module.css";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import {
  editInput,
  fetchUser,
  updateUser,
} from "../../app/features/user/userSlice";

function UserInput() {
  const userFirstName = useSelector(
    (state) => state.user.userInfo.body.firstName
  );
  // console.log(userFirstName);
  const userLastName = useSelector(
    (state) => state.user.userInfo.body.lastName
  );
  // console.log(userLastName);
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);
  const [userInputsValue, setUserInputsValue] = useState({
    firstName: "",
    lastName: "",
  });
  // console.log(userInputsValue);
  const onChange = (e) => {
    setUserInputsValue({
      ...userInputsValue,
      [e.target.name]: e.target.value,
    });
  };
  const dispatch = useDispatch();

  const handleSaveEdit = () => {
    // console.log("save edit");
    dispatch(updateUser(userInputsValue));
    dispatch(fetchUser());
    dispatch(editInput());
  };

  const handleCancelEdit = () => {
    // console.log("cancel edit");
    dispatch(editInput());
  };

  return (
    <>
      <div className={s.user_inputs_container}>
        <input
          className={s.user_input_firstName}
          type="text"
          name="firstName"
          id="firstName"
          value={userInputsValue.firstName}
          placeholder={userFirstName}
          onChange={onChange}
        />
        <input
          className={s.user_input_lastName}
          type="text"
          name="lastName"
          id="lastName"
          placeholder={userLastName}
          value={userInputsValue.lastName}
          onChange={onChange}
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