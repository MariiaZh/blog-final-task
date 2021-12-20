import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({

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
            marginTop: 15,
        },
    },


});

export default useStyles;

