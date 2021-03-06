import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';

import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import FullArticleCard from "./components/FullArticleCard";
import SideBar from '../../components/SideBar/SideBar';
import useStyles from './styles/FullArticleScreenStyles';

import Article, { Comment } from '../../models/Article';
import User from '../../models/User';

const FullArticleScreen: React.FC = () => {
    const classes = useStyles();
    const articlesList = useSelector((state: RootState) => state.articlesWorker.articlesList);
    const users = useSelector((state: RootState) => state.articlesWorker.usersList);
    const commentsList = useSelector((state: RootState) => state.articlesWorker.commentsList);

    const { articleId } = useParams();

    const article: Article | void = articlesList.find(post => post.articleId === articleId);

    let comments: Comment[];
    let user: User | void;

    if (article) {
        user = users.find(user => user.userId === article.authorIdKey);
        comments = commentsList.filter(comment => comment.articleIdKey === article.articleId)
    } else {
        return <Typography>Something went wrong...</Typography>;
    }

    if (user) {
        return (
            <div className={classes.root}>
                <FullArticleCard
                    {...article}
                    author={user.nickName}
                    comments={comments}
                />
                <SideBar />
            </div >
        );
    } else {
        return <Typography>Something went wrong...</Typography>;
    }
}

export default FullArticleScreen;