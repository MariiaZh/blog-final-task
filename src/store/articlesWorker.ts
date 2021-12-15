import { createSlice } from "@reduxjs/toolkit";

const initialState = {

}

const articlesWorker = createSlice({
    name: "articlesWorker",
    initialState,
    reducers: {

    }
})

export const articlesWorkerActions = articlesWorker.actions;
export default articlesWorker.reducer;