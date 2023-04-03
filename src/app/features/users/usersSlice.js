import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
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
    saveToken: (state, action) => {
      state.token = action.payload;
    },
    deleteToken: (state, action) => {
      state.token = "";
    },
  },
});

export default userSlice.reducer;
export const { isLogged, saveToken, deleteToken } = userSlice.actions;