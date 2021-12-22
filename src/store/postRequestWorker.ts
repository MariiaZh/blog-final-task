import { createSlice } from "@reduxjs/toolkit";
import { postRequest } from "../api/post_request";
import { patchRequest } from "../api/patchRequest";

const initialState = {
    status: '',
    error: '',

    postUserAnswer: '',
    postArticleAnswer: '',
    postCommentAnswer: '',

    patchUserAnswer: '',
    patchArticleAnswer: '',
    patchCommentAnswer: '',
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
                        break;
                    case "articles":
                        state.postArticleAnswer = action.payload.id.slice(1);
                        break;
                    case "comments":
                        state.postCommentAnswer = action.payload.id;
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
                    state.patchUserAnswer = action.payload.id;
                    break;
                case "articles":
                    state.patchArticleAnswer = action.payload.id;
                    break;
                case "comments":
                    state.patchCommentAnswer = action.payload.id;
                    break;
                default: alert('Wrong actions in patchrequest!');
            }
        });
    },
})

export const postRequestActions = postRequestWorker.actions;
export default postRequestWorker.reducer;