import { createSlice } from "@reduxjs/toolkit";
import { postRequest } from "../api/post_request";
import { patchRequest } from "../api/patchRequest";

const initialState = {
    status: '',
    error: '',

    postUserAnswer: '',
    postArticleAnswer: '',
    postCommentAnswer: '',

    patchUserAnswer: true,
    patchArticleAnswer: true,
    patchCommentAnswer: true,
}

const postRequestWorker = createSlice({
    name: "postRequestWorker",
    initialState,
    reducers: {
    },

    extraReducers: (builder) => {
        builder.addCase(postRequest.pending, (state,) => {
            state.status = 'loading';
            state.error = '';
        });

        builder.addCase(postRequest.fulfilled, (state, action) => {
            state.status = 'resolved';
            state.error = '';

            if (action.payload?.id) {
                switch (action.payload.dataType) {
                    case "users":
                        state.postUserAnswer = action.payload.id;
                        state.patchUserAnswer = false;
                        break;
                    case "articles":
                        state.postArticleAnswer = action.payload.id;
                        state.patchArticleAnswer = false;
                        break;
                    case "comments":
                        state.postCommentAnswer = action.payload.id;
                        state.patchCommentAnswer = false;
                }
            }
        });
        builder.addCase(patchRequest.pending, (state,) => {
            state.status = 'loading';
            state.error = '';
        });

        builder.addCase(patchRequest.fulfilled, (state, action) => {
            state.status = 'resolved';
            state.error = '';

            switch (action.payload?.dataType) {
                case "users":
                    state.patchUserAnswer = true;

                    break;
                case "articles":
                    state.patchArticleAnswer = true;

                    break;
                case "comments":
                    state.patchCommentAnswer = true;

                    break;
                default: state.patchCommentAnswer = false;
            }
        });
    },
})

export const postRequestActions = postRequestWorker.actions;
export default postRequestWorker.reducer;