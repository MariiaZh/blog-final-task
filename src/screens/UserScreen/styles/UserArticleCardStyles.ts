import { makeStyles } from '@mui/styles';
import constants from '../../../constants/constants';
import { pink } from '@mui/material/colors';

const useStyles = makeStyles({
    root: {
        backgroundColor: 'white',
        margin: "0 0 30px 0",
        padding: "30px 0",
        boxShadow: constants.boxShadowGray,
    },
    articleDate: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0 30px',
        padding: 0,
    },
    boxActions: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: 'center',

    },
    likes: {
        marginRight: 10,
        "& svg": {
            color: pink[500]
        }
    },

    contentWrapper: {
        display: 'flex',
        marginTop: 15,
    },

    image: {
        maxWidth: '40%',
        borderRadius: 6,
        margin: "0 15px",
    },

    textWrapper: {
        marginRight: 30,
    },
    title: {
        color: pink[500],
        textAlign: "center"
    },
    text: {
        textAlign: 'justify',
    },

    container: {
        marginBottom: 15,
        display: 'flex',
        justifyContent: 'space-around'
    },

    commentsContainer: {
        borderTop: "2px solid lightgray",
        margin: 15,
        paddingTop: 15,
    },

    commentsTitleContainer: {
        display: 'flex',
        alignItems: 'center'
    },


    commentsTitle: {
        paddingLeft: 15,
        textAlign: "left",
    },

    newComment: {

        margin: '15px 0',
        padding: "15px 0 0",

        "& div": {
            width: "100%"
        },

        "& button": {
            marginTop: 15
        }
    },


});

export default useStyles;

