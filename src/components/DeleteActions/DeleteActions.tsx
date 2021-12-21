import React, { useEffect } from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';

import { articlesWorkerActions } from '../../store/articlesWorker';
import { deleteRequest } from '../../api/delete_request';

const DeleteActions: React.FC<{ type: string, id: string }> = (props) => {

    const dispatch = useDispatch();
    const deleteAnswer = useSelector((state: RootState) => state.deleteRequestWorker.deleteAnswer);


    const deleteCommentHandler = () => {



        switch (props.type) {
            case "comments":
                dispatch(deleteRequest({ dataType: props.type, id: props.id }));
                break;
            case 'articles': dispatch(deleteRequest({ dataType: props.type, id: props.id }));
                break;
            case "users": dispatch(deleteRequest({ dataType: props.type, id: props.id }));
        }
    }

    useEffect(() => {
        switch (deleteAnswer) {
            case "users":
                dispatch(articlesWorkerActions.updateList('users'));

                break;
            case "articles":
                dispatch(articlesWorkerActions.updateList('articles'));

                break;
            case "comments":
                dispatch(articlesWorkerActions.updateList('comments'));
        }
    }, [deleteAnswer, dispatch])

    return (
        <IconButton onClick={deleteCommentHandler} >
            <DeleteIcon color='disabled' />
        </IconButton>
    )
}


export default DeleteActions;