import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
  isChecked: false,
  userId: "",
  email: "",
  password: "",
  token: "",
  firstName: "",
  lastName: "",
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    isLogged: (state, action) => {
      state.isLogged = true;
    },
    isLoggedOut: (state, action) => {
      state.isLogged = false;
    },
    isChecked: (state, action) => {
      state.isChecked = true;
    },
    saveToken: (state, action) => {
      state.token = action.payload;
    },
    userLoginInfos: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    deleteToken: (state, action) => {
      state.token = "";
    },
  },
});

export default userSlice.reducer;
export const {
  isLogged,
  saveToken,
  deleteToken,
  isChecked,
  userLoginInfos,
  isLoggedOut,
} = userSlice.actions;