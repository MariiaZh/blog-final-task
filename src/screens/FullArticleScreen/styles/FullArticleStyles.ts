import { makeStyles } from '@mui/styles';
import { pink } from '@mui/material/colors';
import constants from '../../../constants/constants';

const useStyles = makeStyles({
    root: {
        width: "75%",
        margin: "0 20px",
        marginLeft: 40,
        backgroundColor: 'white',
        boxShadow: constants.boxShadowGray
    },
    authorContainer: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,

        "& div": {
            padding: 10,
        }
    },

    author: {
        margin: 15,
        color: pink[500],
    },
    title: {
        textAlign: "center",
        margin: 25
    },

    textContainer: {
        margin: 25,
        textAlign: "justify",
    },

    container: {
        borderTop: "2px solid lightgray",
        borderBottom: "2px solid lightgray",
        padding: 35,
        margin: 25,
        display: 'flex',
        justifyContent: 'space-around'
    },
    box: {
        display: "flex"
    },
    likesValue: {
        marginLeft: 10
    },
    commentsContainer: {
        borderBottom: "2px solid lightgray",
        margin: 25,
    },
    comments: {
        borderTop: "2px solid lightgray",
        margin: '15px 0',
        padding: "15px 0 0",

    },
    commentText: {
        display: 'flex',
        alignItems: 'center',
    },
    avatar: {
        marginRight: 15,
    },

    commentActives: {
        marginTop: 15,
        display: 'flex',
        alignItems: 'end',

    },
});

export default useStyles;

