import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import Axios from "../../../_services/caller_service";
import { fetchLogin } from "../auth/authSlice";

const initialState = {
  isLoading: false,
  status: 0,
  userInfo: [],
  error: "",
};

export const fetchUser = createAsyncThunk("user/fetchUser", () => {
  return Axios.post("/user/profile").then((res) => {
    return res.data;
  });
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userInfo = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.isLoading = false;
      state.userInfo = [];
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
export const {} = userSlice.actions;