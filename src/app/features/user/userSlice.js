import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "../../../_services/caller_service";

const initialState = {
  isLoading: false,
  status: 0,
  userInfo: [],
  error: "",
  isInputsEditable: false,
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