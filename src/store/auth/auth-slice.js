import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name:"authSlice",
    initialState:{
        user:{
            token:"",
            status: 0,
            firstName: "",
            lastName:"",
            email: "",
            password:"",
        },
    }
})