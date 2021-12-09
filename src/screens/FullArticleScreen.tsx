import React from 'react';
import { useParams } from 'react-router-dom';

import { Box, Typography } from '@mui/material';
import useStyles from './styles/FullArticleScreenStyles';

import FullArticle from "../components/FullArticle";
import ShortCard from '../components/ShortCard';
import dummy_posts from '../models/dummy_posts';
import dummy_users from '../models/dummy_users';
import Article from '../models/Article';
import User from '../models/User';

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
                <FullArticle
                    image={article.image}
                    title={article.title}
                    author={user.nickName}
                    text={article.text}
                    date={article.date}
                    likes={article.likes}
                />

                <div className={classes.sidebar}>
                    <Typography variant="h5" component="p" color="text.primary" >Recommended Reading</Typography>
                    {dummy_posts.map(post => {
                        const shorttext = post.text.split('.');
                        return < ShortCard
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            text={shorttext[0].toString() + '...'} />
                    })}
                </div>
            </div>
        );
    } else {
        return <Typography>Something went wrong...</Typography>;
    }
}

export default FullArticleScreen;