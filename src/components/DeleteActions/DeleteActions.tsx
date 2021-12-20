
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { articlesWorkerActions } from '../../store/articlesWorker';
import deleteRequest from '../../api/delete_request';

const DeleteActions: React.FC<{ type: string, id: string }> = (props) => {


    const dispatch = useDispatch();

    const deleteCommentHandler = () => {
        switch (props.type) {
            case "comments": dispatch(articlesWorkerActions.deleteComment(props.id));
                deleteRequest({
                    dataType: props.type,
                    id: props.id
                })
                break;
            case 'article': dispatch(articlesWorkerActions.deleteArticle(props.id));
                deleteRequest({
                    dataType: props.type,
                    id: props.id
                })
        }
    }

    return (
        <IconButton onClick={deleteCommentHandler} >
            <DeleteIcon color='disabled' />
        </IconButton>
    )
}


export default DeleteActions;