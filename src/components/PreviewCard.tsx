import React from 'react';
import { Typography, Container, Box, Card, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import useStyles from './styles/PreviewCardStyles';
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

    return (
        <Card className={classes.root}>
            <CardMedia
                component="img"
                height="250"
                image={props.image}
                alt={props.title}
            />
            <Container>
                <Typography variant="body1" color="text.primary" className={classes.author}>
                    By {props.author}
                </Typography>
                <Typography gutterBottom variant="h5" component="div" className={classes.title}>
                    {props.title}
                </Typography>
                <Typography variant="body2" className={classes.text}>
                    {props.text}
                    <Link to={`${props.id}`} >
                        read all
                    </Link>
                </Typography>
            </Container>
            <Container className={classes.container} >
                <Box className={classes.box}>
                    <FavoriteIcon sx={{ color: pink[500] }} />
                    <Typography className={classes.likesValue}>{props.likes}</Typography>
                </Box>
                <Typography>{props.date}</Typography>
            </Container>
        </Card>

    );
}

export default PreviewCard;