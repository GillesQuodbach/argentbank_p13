import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import Axios from "../../../_services/caller_service";

const initialState = {
  status: 0,
  isLoading: false,
  isLogged: false,
  userLoginInfos: "",
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
      // console.log("addToken");
    },
    addUserLoginInfos: (state, action) => {
      state.userLoginInfos = action.payload;
      // console.log("addUserLoginInfos");
    },
    userLoggedIn: (state, action) => {
      state.isLogged = true;
    },
    userLogOut: (state, action) => {
      state.status = 0;
      state.userToken = null;
      state.isLogged = false;
      localStorage.clear();
      sessionStorage.clear();
      // console.log("removeToken");
    },
  },
  extraReducers: (builder) => {
    //LOGIN PENDING
    builder.addCase(fetchLogin.pending, (state, action) => {
      state.isLoading = true;
      state.isLogged = false;
    });
    //LOGIN FULFILLED
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.status = 200;
      state.isLoading = false;
      state.isLogged = true;
      state.userToken = action.payload;
      state.error = "";
      localStorage.setItem("token", state.userToken.token);
      sessionStorage.setItem("token", state.userToken.token);
    });

    //LOGIN ERROR
    builder.addCase(fetchLogin.rejected, (state, action) => {
      state.status = 400;
      state.isLoading = false;
      state.isLogged = false;
      state.token = "";
      state.error = action.error.message;
    });
  },
});

export default authSlice.reducer;
export const { userLoggedIn, userLogOut, addUserLoginInfos } =
  authSlice.actions;
