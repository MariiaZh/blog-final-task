import React, { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';

import { articlesWorkerActions } from '../../store/articlesWorker';
import { deleteRequest } from '../../api/delete_request';

const DeleteActions: React.FC<{ type: string, id: string }> = (props) => {

    const dispatch = useDispatch();
    const deleteAnswer = useSelector((state: RootState) => state.deleteRequestWorker.deleteAnswer);
    const [deletedId, setDeletedId] = useState('');

    const deleteHandler = () => {
        dispatch(deleteRequest({ dataType: props.type, id: props.id }));
    }

    useEffect(() => {
        if (deleteAnswer.id !== deletedId && deleteAnswer.dataType !== 'articles') {
            dispatch(articlesWorkerActions.updateList(deleteAnswer.dataType));
            setDeletedId(deleteAnswer.id);
        }
    }, [deleteAnswer, dispatch, deletedId]);

    return (
        <IconButton onClick={deleteHandler} >
            <DeleteIcon color='disabled' />
        </IconButton>
    )
}


export default DeleteActions;