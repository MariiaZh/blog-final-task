import React from 'react';
import { Typography, Box, CardMedia, Avatar } from '@mui/material';
import useStyles from '../styles/FullArticleStyles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { pink } from '@mui/material/colors';
import { Comment } from '../../../models/Article';
import DeleteIcon from '@mui/icons-material/Delete';
import constants from '../../../constants/constants';
import stringAvatar from '../../../helpers/avatarUI';

interface CardProps {
    image: string,
    title: string,
    author: string,
    text: string,
    date: string,
    likes: number,
    comments: Comment[],
}


const FullArticleCard: React.FC<CardProps> = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h5" component="p" color="text.primary" className={classes.authorContainer}>
                written by
                <Typography variant="h4" component='span' className={classes.author}>
                    {props.author}
                </Typography>
            </Typography>
            <Typography gutterBottom variant="h2" component="div" className={classes.title}>
                {props.title}
            </Typography>

            <CardMedia
                component="img"
                height={`${constants.width / 3}`}
                width={`${constants.width * 80 / 100}`}
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

            <div className={classes.commentsContainer} >
                <Typography variant="h5" component="p" color="text.primary" className={classes.authorContainer}>
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
        </div >
    );
}

export default FullArticleCard;