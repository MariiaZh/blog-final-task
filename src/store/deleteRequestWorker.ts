import { createSlice } from "@reduxjs/toolkit";
import { deleteRequest } from '../api/delete_request';

const initialState = {
    status: '',
    error: '',
    deleteAnswer: '',
}

const deleteRequestWorker = createSlice({
    name: "deleteRequestWorker",
    initialState,
    reducers: {
    },

    extraReducers: (builder) => {
        builder.addCase(deleteRequest.pending, (state) => {
            state.status = 'loading';
            state.error = '';
        });

        builder.addCase(deleteRequest.fulfilled, (state, action) => {
            state.status = 'resolved';
            state.error = '';

            console.log("deleteRequest.fulfilled", action.payload);

            switch (action.payload?.dataType) {
                case "users":
                    state.deleteAnswer = "users";
                    break;
                case "articles":
                    state.deleteAnswer = "articles";
                    break;
                case "comments":
                    state.deleteAnswer = "comments";
            }
        });
    },
})

export const deleteRequestWorkerActions = deleteRequestWorker.actions;
export default deleteRequestWorker.reducer;