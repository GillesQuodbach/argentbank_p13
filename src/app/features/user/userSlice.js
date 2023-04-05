import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: 1,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    users: (state, action) => {
      // action {type user/users, payload)
      state.users--;
    },
  },
});

export default userSlice.reducer;
export const { users } = userSlice.actions;