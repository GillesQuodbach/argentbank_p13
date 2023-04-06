import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";

import Axios from "../../../_services/caller_service";

const initialState = {
  status: 0,
  isLoading: false,
  isLogged: false,
  userToken: "",
  error: "",
};
export const fetchLogin = createAsyncThunk("auth/loginUser", (loginInput) => {
  return Axios.post("user/login", loginInput).then((res) => res.data.body);
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.userToken = localStorage.getItem("token");
      console.log("addToken");
    },
    userLogOut: (state, action) => {
      state.status = 0;
      state.userToken = null;
      state.isLogged = true;
      localStorage.clear();
      console.log("removeToken");
    },
  },
  extraReducers: (builder) => {
    //LOGIN PENDING
    builder.addCase(fetchLogin.pending, (state, action) => {
      state.isLoading = true;
    });
    //LOGIN FULFILLED
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.status = 200;
      state.isLoading = false;
      state.isLogged = true;
      state.userToken = action.payload;
      state.error = "";
      localStorage.setItem("token", state.userToken.token);
      console.log("checked", state.userToken);
    });

    //LOGIN ERROR
    builder.addCase(fetchLogin.rejected, (state, action) => {
      state.status = 400;
      state.isLoading = false;
      state.token = "";
      state.error = action.error.message;
    });
  },
});

export default authSlice.reducer;
export const { addToken, userLoggedIn, removeToken, userLogOut } =
  authSlice.actions;