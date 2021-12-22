import { createSlice } from "@reduxjs/toolkit";
import { deleteRequest } from '../api/delete_request';

const initialState = {
    status: '',
    error: '',
    deleteAnswer: {
        id: '',
        dataType: '',
    },
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
            if (action.payload?.id) {
                state.deleteAnswer = {
                    dataType: action.payload?.dataType,
                    id: action.payload?.id,
                };
            }
        });
    },
})

export const deleteRequestWorkerActions = deleteRequestWorker.actions;
export default deleteRequestWorker.reducer;