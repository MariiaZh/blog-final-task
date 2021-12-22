import React from 'react';
import { Typography, Container, CardMedia, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import FavoriteIcon from '@mui/icons-material/Favorite';
import useStyles from '../styles/PreviewCardStyles';
import Article from '../../../models/Article';

import { pink } from '@mui/material/colors';

const PreviewCard: React.FC<{ nickName: string } & Article> = (props) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const authorsList = useSelector((state: RootState) => state.articlesWorker.usersList);

    const author = authorsList.find(author => author.userId === props.authorIdKey);

    const goToArticleHandler = () => navigate(`/${props.articleId}`);

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
                    By {author ? author.nickName : ''}
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