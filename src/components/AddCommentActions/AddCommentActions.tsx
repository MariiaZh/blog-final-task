import React, { Fragment, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { articlesWorkerActions } from '../../store/articlesWorker';
import { Typography, Button, IconButton, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { RootState } from '../../store/index';
import postRequest from '../../api/post_request';

import useStyles from './styles/AddCommentActionsStyles';
import { pink, blue } from '@mui/material/colors';

const AddCommentActions: React.FC<{ articleId: string }> = (props) => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.userAuth.user.nickName);
    const [isAddNewComment, setIsAddNewComment] = useState(false);

    const textRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    const openNewCommentHandler = () => {
        setIsAddNewComment(!isAddNewComment);
        dispatch(articlesWorkerActions.chooseCurrentPost(props.articleId));
    }

    const addCommentHandler = () => {

        if (textRef.current.value !== '') {

            const comment = {
                articleIdKey: props.articleId,
                commentId: props.articleId + Math.floor(Math.random() * 10000),
                nickName: user,
                date: new Date().toDateString(),
                text: textRef.current.value,
            }

            dispatch(articlesWorkerActions.addComment({ ...comment }))

            postRequest({
                dataType: 'comment',
                ...comment
            })

            textRef.current.value = '';
            setIsAddNewComment(!isAddNewComment);
            dispatch(articlesWorkerActions.updateList('comments'));
        }
    }

    const eraseCommentHandler = () => {
        setIsAddNewComment(!isAddNewComment);
        textRef.current.value = '';
    }

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