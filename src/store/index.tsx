import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import userAuth from './userAuth';
import articlesWorker from './articlesWorker';

const rootReducer = combineReducers({
    userAuth,
    articlesWorker
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: false
    }),
})

export type RootState = ReturnType<typeof rootReducer>
export default store;