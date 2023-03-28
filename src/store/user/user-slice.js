import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        userToken: [{
            token: ""
        }],
        userProfile: [{
            email: "",
            firstName: "",
            lastName: "",
            id: ""
        }]
    },
    reducers: {
        addUserToken: (currentSlice, action) => {
            currentSlice.userToken.push(action.payload)
            console.log("addUserToken()")
        },
        logOutUser: (currentSlice, action) => {
            currentSlice.userToken.push(action.payload)
            console.log("addUserToken()")
        },
        addUserProfile: (currentSlice, action) => {
            currentSlice.userProfile.push(action.payload)
            console.log("userProfile()")
        }

    }
})

const {addUserToken, addUserProfile} = userSlice.actions

export {addUserToken, addUserProfile}