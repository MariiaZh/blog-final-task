import { createSlice } from "@reduxjs/toolkit";
import authenticationRequest from '../api/authentication_request';

const initialState = {
    isLoginInSystem: false,
    isNewAccountCreating: false,
    access: false,
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

        getAccess(state, action) {
            state.access = action.payload;
        },

        switchButton(state, action) {
            state.isNewAccountCreating = action.payload;
        },

        logInUser(state, action) {
            state.user = {
                ...action.payload
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
            state.localId = action.payload;
        });

        builder.addCase(authenticationRequest.rejected, (state) => {
            state.status = 'rejected';
            state.error = "error";
        });
    },
})

export const userAuthActions = userAuth.actions;
export default userAuth.reducer;
