import { createAsyncThunk } from "@reduxjs/toolkit";
import Article, { Comment } from "../models/Article";
import User from '../models/User';

type PropsArticle = { dataType: string } & Article;
type PropsUser = { dataType: string } & User;
type PropsComment = { dataType: string } & Comment;

export const postRequest = createAsyncThunk(
    'postRequestWorker/postRequest',

    async (props: PropsArticle | PropsUser | PropsComment) => {
        try {
            const url = `https://critic-s-gaze-default-rtdb.europe-west1.firebasedatabase.app/${props.dataType}.json`;

            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    ...props
                }),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const data = await response.json();
            console.log('DATA', data);

            return {
                dataType: props.dataType,
                id: data.name
            };
        } catch (err) {
            console.log("ERROR POST REQUEST", err)
        }

    })
