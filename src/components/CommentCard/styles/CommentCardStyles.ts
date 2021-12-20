import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({

    comments: {
        borderTop: "2px solid lightgray",
        margin: '15px 0',
        padding: "15px 0 0",
    },

    commentAuthor: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingLeft: 55,
    },

    commentText: {
        display: 'flex',
        alignItems: 'center',
    },
    avatar: {
        marginRight: 15,
    },

    commentActives: {
        margin: "15px 0",
        paddingLeft: 50,
        display: 'flex',
        justifyContent: 'space-between'
    },
});

export default useStyles;

