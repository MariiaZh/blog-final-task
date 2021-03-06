import { createSlice } from "@reduxjs/toolkit";
import User from "../models/User";
import Article, { Comment } from "../models/Article";
import { fetchData } from '../api/fetch_request';


const initialState = {
    usersList: [] as User[],
    articlesList: [] as Article[],
    commentsList: [] as Comment[],

    isArticleAdding: false,
    currentPost: '',

    selectedGenre: '',
    status: '',
    error: '',

    isUsersUpdate: true,
    isArticlesUpdate: true,
    isCommentsUpdate: true
}

const articlesWorker = createSlice({
    name: "articlesWorker",
    initialState,
    reducers: {

        addArticleOverlay(state) {
            state.isArticleAdding = !state.isArticleAdding;
        },

        chooseCurrentPost(state, action) {
            state.currentPost = action.payload
        },

        changeSelectedGenre(state, action) {
            state.selectedGenre = action.payload;
        },

        updateList(state, action) {
            console.log('update-store')
            switch (action.payload) {
                case "users":
                    state.isUsersUpdate = true;
                    break;
                case "articles":
                    state.isArticlesUpdate = true;
                    break;
                case "comments":
                    state.isCommentsUpdate = true;
                    break;
            }
        }
    },

    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.status = 'loading';
            state.error = '';
        });

        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.status = 'resolved';
            state.error = '';
            if (action.payload?.data) {
                let dataArray = [];
                for (let key in action.payload.data) {
                    dataArray.push(action.payload.data[key]);
                    dataArray.sort((a, b) => a.date > b.date ? 1 : -1);
                }
                switch (action.payload.dataType) {
                    case "users":
                        state.usersList = dataArray;
                        state.isUsersUpdate = false;

                        break;
                    case "articles":
                        state.articlesList = dataArray;
                        state.isArticlesUpdate = false;

                        break;
                    case "comments":
                        state.commentsList = dataArray;
                        state.isCommentsUpdate = false;
                        break;
                }
            }
        });
    },
})

export const articlesWorkerActions = articlesWorker.actions;
export default articlesWorker.reducer;