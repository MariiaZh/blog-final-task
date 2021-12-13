import React from 'react';
import { Typography, Avatar, Card, CardMedia, Button, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';

import { Comment } from '../../../models/Article';
import useStyles from '../styles/UserArticleCardStyles';

import { pink } from '@mui/material/colors';

interface CardProps {
    id: string,
    image: string,
    title: string,
    author: string,
    text: string,
    date: string,
    likes: number,
    comments: Comment[],
}

function stringToColor(string: string) {
    let hash = 0;
    let i;
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = '#';
    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.substr(-2);
    }
    return color;
}

function stringAvatar(name: string) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}


const UserArticleCard: React.FC<CardProps> = (props) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const goToArticleHandler = () => navigate(`/${props.id}`)

    const txtArray = props.text.split('.');
    const userText = txtArray.slice(0, 3).join('.');

    return (
        <Card className={classes.root}>
            <div> <Typography className={classes.articleDate}>{props.date}</Typography>
            </div>
            <div className={classes.contentWrapper}>
                <div className={classes.imageWrapper}>
                    <CardMedia
                        component="img"
                        image={props.image}
                        alt={props.title}
                    />
                </div>
                <Container className={classes.textWrapper}>
                    <Typography gutterBottom variant="h6" component="div" className={classes.title}>
                        {props.title}
                    </Typography>
                    <Typography variant="body2" className={classes.text}>
                        {userText}
                        <Button onClick={goToArticleHandler} size="small">read all</Button>
                    </Typography>
                    <Box className={classes.box}>
                        <FavoriteIcon sx={{ color: pink[500] }} />
                        <Typography className={classes.likesValue}>{props.likes}</Typography>
                    </Box>
                </Container>
            </div>

            <div className={classes.commentsContainer} >
                <Typography className={classes.commentsTitle}>
                    Comments
                </Typography>
                {props.comments.map(comment => (
                    <div className={classes.comments} key={comment.nickName + comment.date}>
                        <div className={classes.commentActives} >
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
        </Card>
    );
}

export default UserArticleCard;