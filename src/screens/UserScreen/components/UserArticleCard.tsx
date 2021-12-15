import React from 'react';

import { Typography, Avatar, CardMedia, Button, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';

import { Comment } from '../../../models/Article';
import stringAvatar from '../../../helpers/avatarUI';

import useStyles from '../styles/UserArticleCardStyles';
import { pink } from '@mui/material/colors';

type CardProps = {
    id: string,
    title: string,
    text: string,
    likes: number,
    image: string,
    date: string,
    comments: Comment[],
}

const UserArticleCard: React.FC<CardProps> = (props) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const goToArticleHandler = () => navigate(`/${props.id}`)

    const txtArray = props.text.split('.');
    const userText = txtArray.slice(0, 3).join('.');

    return (
        <div className={classes.root}>
            <div className={classes.articleDate}>
                <div className={classes.box}>
                    <div className={classes.likes}>
                        <FavoriteIcon />
                    </div>
                    <Typography style={{ fontWeight: 'bold' }}>{props.likes}</Typography>
                </div>
                <Typography >{props.date}</Typography>

            </div>
            <div className={classes.contentWrapper}>
                <CardMedia className={classes.image}
                    component="img"
                    image={props.image}
                    alt={props.title}
                />
                <div className={classes.textWrapper}>
                    <Typography gutterBottom variant="h6" component="div" className={classes.title}>
                        {props.title}
                    </Typography>
                    <Typography variant="body2" className={classes.text}>
                        {userText}
                        <Button onClick={goToArticleHandler} size="small">read all</Button>
                    </Typography>
                </div>
            </div>

            <div className={classes.commentsContainer} >
                <Typography variant="h6" className={classes.commentsTitle} style={{ fontWeight: "bold" }}>
                    Comments
                </Typography>
                {props.comments.map(comment => (
                    <div className={classes.comments} key={comment.nickName + comment.date}>
                        <div className={classes.commentAuthor} >
                            <Typography variant="body2" color="text.primary" style={{ fontWeight: "bold" }}>{comment.nickName}</Typography>
                            <Typography variant="body2" color="text.secondary">{comment.date}</Typography>
                        </div>
                        <div className={classes.commentText}>
                            <Avatar {...stringAvatar(comment.nickName)} className={classes.avatar} />
                            <Typography>{comment.text}</Typography>
                        </div >
                        <div className={classes.commentActives} >
                            <DeleteIcon color='disabled' />
                            
                        </div>
                    </div>
                ))}
            </div >
        </div>
    );
}

export default UserArticleCard;