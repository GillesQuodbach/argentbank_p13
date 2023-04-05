import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import Axios from "../../../_services/caller_service";

const initialState = {
  isLoading:false,
  isLogged:false,
  userToken: '',
  error:'',
}
 const fetchLogin = createAsyncThunk('auth/fetchLogin', (loginInput)=> {
  return Axios.post("user/login", loginInput)
    .then(res => res.data)
    })


const authSlice = createSlice({
  name:'auth',
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.userToken = action.payload;
      console.log('addToken');
    },
    userLoggedIn: (state, action)=> {
      state.isLogged = true
    },
  },
  extraReducers: builder => {
    //LOGIN PENDING
    builder.addCase(fetchLogin.pending, (state, action)=> {
      state.isLoading = true
    })
    //LOGIN FULFILLED
    builder.addCase(fetchLogin.fulfilled, (state, action)=> {
      state.isLoading = false
      state.token = action.payload
      state.error = ''
    })
    //LOGIN ERROR
    builder.addCase(fetchLogin.rejected, (state, action)=> {
      state.isLoading = false
      state.token = ""
      state.error = action.error.message
    })

  }

})


export default authSlice.reducer
export const { addToken,userLoggedIn } = authSlice.actions;