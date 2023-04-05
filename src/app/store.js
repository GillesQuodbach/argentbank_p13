import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/user/userSlice";
import authReducer from "./features/auth/authSlice"

const store = configureStore({
  reducer: {
    user: usersReducer,
    auth: authReducer,
  },
});

export default store;