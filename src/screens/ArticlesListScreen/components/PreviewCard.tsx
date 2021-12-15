import React from 'react';
import { Typography, Container, Box, Card, CardMedia, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import useStyles from '../styles/PreviewCardStyles';

import { pink } from '@mui/material/colors';

interface CardProps {
    id: string,
    image: string,
    title: string,
    author: string,
    text: string,
    date: string,
    likes: number,
}

const PreviewCard: React.FC<CardProps> = (props) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const goToArticleHandler = () => navigate(`/${props.id}`)

    return (
        <div className={classes.root}>
            <CardMedia
                component="img"
                height="250"
                image={props.image}
                alt={props.title}
            />
            <Container>
                <Typography variant="body1" color="text.primary">
                    By {props.author}
                </Typography>
                <Typography gutterBottom variant="h5" component="div" className={classes.title}>
                    {props.title}
                </Typography>
                <Typography variant="body2" className={classes.text}>
                    {props.text}
                    <Button onClick={goToArticleHandler} size="small">read all</Button>
                </Typography>
            </Container>
            <div className={classes.container} >
                <div className={classes.box}>
                    <div className={classes.likesValue}> <FavoriteIcon sx={{ color: pink[500] }} /> </div>
                    <Typography >{props.likes}</Typography>
                </div>
                <Typography>{props.date}</Typography>
            </div>
        </div>

    );
}

export default PreviewCard;