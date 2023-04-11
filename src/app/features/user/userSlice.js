import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "../../../_services/caller_service";

const initialState = {
  isLoading: false,
  status: 0,
  userInfo: [],
  error: "",
  isInputsEditable: false,
  accounts: [
    {
      id: 1,
      title: "Argent Bank Checking (x8349)",
      amount: "2082.79",
      description: "Available Balance",
    },
    {
      id: 2,
      title: "Argent Bank Savings (x6712)",
      amount: "10928.42",
      description: "Available Balance",
    },
    {
      id: 3,
      title: "Argent Bank Credit Card (x8349)",
      amount: "184.30",
      description: "Current Balance",
    },
  ],
};

//Fetch user
export const fetchUser = createAsyncThunk("user/fetchUser", () => {
  return Axios.post("/user/profile").then((res) => {
    return res.data;
  });
});

//Update user
export const updateUser = createAsyncThunk("user/updateUser", (userInfos) => {
  return Axios.put("/user/profile", userInfos).then((res) => {
    // console.log(res.data);
    return res.data;
  });
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    initialEditInput: (state, action) => {
      state.isInputsEditable = false;
    },
    editInput: (state, action) => {
      state.isInputsEditable = !state.isInputsEditable;
    },
    updateUserName: (state, action) => {
      state.userInfo.body.firstName = action.payload;
      state.userInfo.body.lastName = action.payload;
      // console.log("updateUserName");
    },
  },
  extraReducers: (builder) => {
    //FETCH USER
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
    builder.addCase(updateUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userInfo.body.firstName = action.payload.firstName;
      state.userInfo.body.lastName = action.payload.lastName;
      state.error = "";
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.isLoading = false;
      state.userInfo.body.firstName = "error";
      state.userInfo.body.lastName = "error";
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
export const { editInput, initialEditInput } = userSlice.actions;