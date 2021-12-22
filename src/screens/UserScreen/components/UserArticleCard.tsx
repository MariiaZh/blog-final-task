import React, { useEffect, useState } from 'react';

import { Typography, CardMedia, Button, } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';
import AddCommentActions from '../../../components/AddCommentActions/AddCommentActions';
import { articlesWorkerActions } from '../../../store/articlesWorker';
import { deleteRequest } from '../../../api/delete_request';

import DeleteActions from '../../../components/DeleteActions/DeleteActions';
import CommentCard from '../../../components/CommentCard/CommentCard';
import { Comment } from '../../../models/Article';
import useStyles from '../styles/UserArticleCardStyles';

type CardProps = {
    articleId: string,
    authorIdKey: string,
    title: string,
    text: string,
    date: string,
    categories: string[],
    likes: number,
    image: string,
    comments: Comment[]
}

const UserArticleCard: React.FC<CardProps> = (props) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const commentsList = useSelector((state: RootState) => state.articlesWorker.commentsList);
    const currentArticleComments = commentsList.filter(comment => comment.articleIdKey === props.articleId);
    const goToArticleHandler = () => navigate(`/${props.articleId}`);
    const userText: string = props.text.slice(0, 300);
    const deleteAnswer = useSelector((state: RootState) => state.deleteRequestWorker.deleteAnswer);
    const [deletedId, setDeletedId] = useState('');

    useEffect(() => {
        if (deleteAnswer.id !== deletedId && deleteAnswer.dataType === 'articles') {
            dispatch(articlesWorkerActions.updateList(deleteAnswer.dataType));
            setDeletedId(deleteAnswer.id);
            currentArticleComments.forEach(comment => {
                dispatch(deleteRequest({ dataType: "comments", id: comment.commentId }));
            })
        }
    }, [deleteAnswer, dispatch, deletedId, currentArticleComments])

    return (
        <div className={classes.root}>
            <div className={classes.articleDate}>
                <div className={classes.boxActions}>
                    <div className={classes.likes}>
                        <FavoriteIcon />
                    </div>
                    <Typography style={{ fontWeight: 'bold', marginRight: 25 }}>{props.likes}</Typography>
                    <DeleteActions
                        type="articles"
                        id={props.articleId}
                    />
                </div>
                <Typography >{props.date}</Typography>

            </div>
            <div className={classes.contentWrapper}>
                <CardMedia className={classes.image}
                    component="img"
                    image={props.image}
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
                <AddCommentActions articleId={props.articleId} />
                {currentArticleComments.map(comment => {
                    return < CommentCard
                        key={comment.commentId}
                        authorIdKey={props.authorIdKey}
                        {...comment} />
                }
                )}
            </div >
        </div >
    );
}

export default UserArticleCard;