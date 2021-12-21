import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";


import userAuth from './userAuth';
import articlesWorker from './articlesWorker';
import postRequestWorker from "./postRequestWorker";
import deleteRequestWorker from "./deleteRequestWorker";

const rootReducer = combineReducers({
    userAuth,
    articlesWorker,
    postRequestWorker,
    deleteRequestWorker
});


const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export type RootState = ReturnType<typeof rootReducer>
export default store;