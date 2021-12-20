import { Typography, Avatar } from '@mui/material';

import DeleteActions from '../DeleteActions/DeleteActions';
import stringAvatar from '../../helpers/avatarUI';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import useStyles from './styles/CommentCardStyles';
import { Comment } from '../../models/Article';

const CommentCard: React.FC<Comment & { authorIdKey: string }> = (props) => {
    const classes = useStyles();
    const currentUser = useSelector((state: RootState) => state.userAuth.user);
    const isActionAvailabale: boolean = (currentUser.nickName === props.nickName || props.authorIdKey === currentUser.userId || currentUser.role === 'admin' || false)

    return (
        <div className={classes.comments} key={props.commentId}>
            <div className={classes.commentAuthor} >
                <Typography variant="body2" color="text.primary" style={{ fontWeight: "bold" }}>{props.nickName}</Typography>
                <Typography variant="body2" color="text.secondary">{props.date}</Typography>
            </div>
            <div className={classes.commentText}>
                <Avatar {...stringAvatar(props.nickName)} className={classes.avatar} />
                <Typography>{props.text}</Typography>
            </div >
            {
                isActionAvailabale &&
                <div className={classes.commentActives} >
                    <DeleteActions
                        type="comments"
                        id={props.commentId} />
                </div>
            }
        </div>
    )
}

export default CommentCard;


