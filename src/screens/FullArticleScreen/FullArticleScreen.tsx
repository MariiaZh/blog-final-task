import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';

import FullArticleCard from "./components/FullArticleCard";
import SideBar from '../../components/SideBar/SideBar';
import useStyles from './styles/FullArticleScreenStyles';

import dummy_posts from '../../models/dummy_posts';
import dummy_users from '../../models/dummy_users';
import Article from '../../models/Article';
import User from '../../models/User';

const FullArticleScreen: React.FC = () => {
    const classes = useStyles();
    const { id } = useParams();

    const article: Article | void = dummy_posts.find(post => post.id === id);
    let user: User | void;

    if (article) {
        user = dummy_users.find(user => user.userId === article.authorId);
    } else {
        return <Typography>Something went wrong...</Typography>;
    }

    if (user) {
        return (
            <div className={classes.root}>
                <FullArticleCard
                    image={article.image}
                    title={article.title}
                    author={user.nickName}
                    text={article.text}
                    date={article.date}
                    likes={article.likes}
                    comments={article.comments}
                />
                <SideBar />
            </div >
        );
    } else {
        return <Typography>Something went wrong...</Typography>;
    }
}

export default FullArticleScreen;