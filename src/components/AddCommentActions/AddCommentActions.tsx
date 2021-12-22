import React, { Fragment, useState, useRef, useEffect, useCallback } from 'react';
import { Typography, Button, IconButton, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { useDispatch, useSelector } from 'react-redux';
import { articlesWorkerActions } from '../../store/articlesWorker';
import { RootState } from '../../store/index';
import { postRequest } from '../../api/post_request';
import { fetchData } from '../../api/fetch_request';

import useStyles from './styles/AddCommentActionsStyles';
import { pink, blue } from '@mui/material/colors';
import { patchRequest } from '../../api/patchRequest';

const AddCommentActions: React.FC<{ articleId: string }> = (props) => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.userAuth.user.nickName);
    const postCommentAnswer = useSelector((state: RootState) => state.postRequestWorker.postCommentAnswer);
    const patchCommentAnswer = useSelector((state: RootState) => state.postRequestWorker.patchCommentAnswer);

    const [isAddNewComment, setIsAddNewComment] = useState(false);
    const [newPostId, setNewPostId] = useState('');
    const [accessToPatch, setAccessToPatch] = useState(false);

    const textRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    const openNewCommentHandler = useCallback(() => {
        setIsAddNewComment(!isAddNewComment);
        dispatch(articlesWorkerActions.chooseCurrentPost(props.articleId));
    }, [isAddNewComment, dispatch, props.articleId]);

    const addCommentHandler = useCallback(() => {

        if (textRef.current.value !== '') {
            dispatch(postRequest({
                dataType: 'comments',
                data: {
                    articleIdKey: props.articleId,
                    commentId: String(Math.round(Math.random() * 10000)),
                    nickName: user,
                    date: new Date().toDateString(),
                    text: textRef.current.value,
                }
            }))
            textRef.current.value = '';
            setIsAddNewComment(!isAddNewComment);
        }
    }, [dispatch, isAddNewComment, props.articleId, user])

    useEffect(() => {
        if (postCommentAnswer !== newPostId) {
            dispatch(patchRequest({
                dataType: "comments",
                id: postCommentAnswer,
                keyData: 'commentId'
            }));
            setNewPostId(postCommentAnswer);
            setAccessToPatch(true);
        }
    }, [postCommentAnswer, dispatch, newPostId])

    useEffect(() => {
        if (patchCommentAnswer && accessToPatch) {
            dispatch(fetchData("comments"));
            dispatch(articlesWorkerActions.updateList('comments'));
            setAccessToPatch(false);
        }
    }, [patchCommentAnswer, dispatch, accessToPatch])

    const eraseCommentHandler = useCallback(() => {
        setIsAddNewComment(!isAddNewComment);
        textRef.current.value = '';
    }, [isAddNewComment])

    return (
        <Fragment>
            <div className={classes.commentsTitleContainer}>
                <IconButton onClick={openNewCommentHandler}>
                    <AddIcon color='primary' />
                </IconButton>
                <Typography variant="h6" className={classes.commentsTitle} style={{ fontWeight: "bold" }}>
                    Comments
                </Typography>
            </div>
            {isAddNewComment && (
                <div className={classes.newComment} >
                    <TextField
                        id="comment"
                        label="Comment"
                        placeholder="Write your comment"
                        multiline
                        inputRef={textRef}
                    />
                    <Button
                        variant='text' style={{ color: pink[500] }}
                        onClick={addCommentHandler}>
                        Add
                    </Button>
                    <Button
                        variant='text' style={{ color: blue[700] }}
                        onClick={eraseCommentHandler} >
                        Delete
                    </Button>
                </div>
            )}
        </Fragment>
    )
}

export default AddCommentActions;