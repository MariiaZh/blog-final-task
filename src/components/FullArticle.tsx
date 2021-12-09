import React from 'react';
import { Typography, Box, CardMedia } from '@mui/material';
import useStyles from './styles/FullArticleStyles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { pink } from '@mui/material/colors';

const clientWidth = document.documentElement.clientWidth;

interface CardProps {
    image: string,
    title: string,
    author: string,
    text: string,
    date: string,
    likes: number
}

const FullArticleScreen: React.FC<CardProps> = (props) => {
    const classes = useStyles();
    console.log('clientWidth:', clientWidth / 4)

    return (
        <div className={classes.root}>
            <Typography variant="h5" component="p" color="text.primary" className={classes.authorContainer}>
                written by <Typography variant="h4" component='span' className={classes.author}>{props.author}</Typography>
            </Typography>
            <Typography gutterBottom variant="h2" component="div" className={classes.title}>
                {props.title}
            </Typography>

            <CardMedia
                component="img"
                height={`${clientWidth / 3}`}
                width={`${clientWidth * 80 / 100}`}
                image={props.image}
                alt={props.title}
            />

            <Typography variant="h6" color="text.secondary" component="p" className={classes.text}>
                {props.text}
            </Typography>

            <div className={classes.container} >
                <Box className={classes.box}>
                    <FavoriteIcon sx={{ color: pink[500] }} />
                    <Typography className={classes.likesValue} component="div">{props.likes}</Typography>
                </Box>
                <Typography component="div">{props.date}</Typography>
            </div>
        </div >
    );
}

export default FullArticleScreen;