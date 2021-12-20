import React from 'react';
import { Typography, Box, CardMedia } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

import AddCommentActions from '../../../components/AddCommentActions/AddCommentActions';
import CommentCard from '../../../components/CommentCard/CommentCard';
import { Comment } from '../../../models/Article';
import constants from '../../../constants/constants';

import useStyles from '../styles/FullArticleStyles';
import { pink } from '@mui/material/colors';

interface CardProps {
    author: string,
    articleId: string,
    title: string,
    image: string,
    authorIdKey: string,
    text: string,
    date: string,
    categories: string[],
    likes: number,
    comments: Comment[],
}

const FullArticleCard: React.FC<CardProps> = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.authorContainer}>
                <div>
                    <Typography variant="h5" component="p" color="text.primary">
                        written by
                    </Typography>
                </div>
                <div>
                    <Typography variant="h4"
                        component='span' className={classes.author}>
                        {props.author}
                    </Typography>
                </div>
            </div>
            <Typography gutterBottom variant="h2"
                component="div" className={classes.title}>
                {props.title}
            </Typography>
            <CardMedia
                component="img"
                height={`${constants.width / 3}`}
                width={`${constants.width * 80 / 100}`}
                image={props.image}
                alt={props.title}
            />

            <div className={classes.textContainer}>
                <Typography variant="body1" style={{ fontSize: 20 }}
                    color="text.secondary" component="p">
                    {props.text}
                </Typography>

            </div>

            <div className={classes.container} >
                <Box className={classes.box}>
                    <FavoriteIcon sx={{ color: pink[500] }} />
                    <Typography
                        className={classes.likesValue}
                        component="div">
                        {props.likes}
                    </Typography>
                </Box>
                <Typography component="div">{props.date}</Typography>
            </div>
            <div className={classes.commentsContainer} >
                <AddCommentActions articleId={props.articleId} />
                {props.comments.map(comment => (
                    <CommentCard
                        key={comment.commentId}
                        authorIdKey={props.authorIdKey}
                        {...comment} />
                ))}
            </div >
        </div >
    );
}

export default FullArticleCard;