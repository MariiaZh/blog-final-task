import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoginInSystem: false,
    isNewAccountCreating: false,
    user: {
        userId: '',
        email: '',
        password: "",
        nickName: '',
        role: '',
        picture: -1
    },
    homePage: false
}

const userAuth = createSlice({
    name: "userAuth",
    initialState,
    reducers: {

        switchButton(state) {
            state.isNewAccountCreating = !state.isNewAccountCreating;
        },

        logInUser(state, action) {
            state.user = {
                userId: action.payload.userId,
                email: action.payload.email,
                password: action.payload.password,
                nickName: action.payload.nickName,
                role: action.payload.role,
                picture: action.payload.picture
            }
            state.isLoginInSystem = true;
            state.isNewAccountCreating = false;
        },

        logOutUser(state) {
            state.isLoginInSystem = false;
            state.user = {
                userId: '',
                email: '',
                password: '',
                nickName: '',
                role: '',
                picture: -1
            }
        },

        changePage(state, action) {
            state.homePage = action.payload;
        }
    }
})

export const userAuthActions = userAuth.actions;
export default userAuth.reducer;
