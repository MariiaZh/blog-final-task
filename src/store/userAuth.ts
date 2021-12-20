import { createSlice } from "@reduxjs/toolkit";
import authenticationRequest from '../api/authentication_request';

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
    homePage: false,

    status: '',
    error: '',
    localId: ''
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
            state.status = '';
            state.localId = '';
        },

        changePage(state, action) {
            state.homePage = action.payload;
        }
    },

    extraReducers: (builder) => {
        builder.addCase(authenticationRequest.pending, (state) => {
            state.status = 'loading';
            state.error = '';
        });
        builder.addCase(authenticationRequest.fulfilled, (state, action) => {
            state.status = 'resolved';
            state.error = '';
            console.log('action.payload', action.payload);
            state.localId = action.payload;
        });
        builder.addCase(authenticationRequest.rejected, (state, action) => { });
    },


})

export const userAuthActions = userAuth.actions;
export default userAuth.reducer;
