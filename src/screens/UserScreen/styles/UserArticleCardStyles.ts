import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {

        justifyContent: "space-between",
        margin: "0 0 30px 0",
        //boxShadow: "5px 4px 4px gray, -3px 4px 4px gray",
        minHeight: 450,
    },
    articleDate: {
        margin: 15,
    },
    contentWrapper: {
        display: 'flex'
    },
    imageWrapper: {
        backgroundColor: 'black',
        width: '40%',
        height: "auto",
        borderRadius: '0 6px 6px 0',
        overflow: 'hidden',
        padding: 0
    },
    textWrapper: {
        width: "60%"
    },
    title: {
        textAlign: "center"
    },

    text: {
        textAlign: 'justify',
    },


    box: {

        display: "flex",
        justifyContent: "flex-end"
    },

    container: {
        marginBottom: 15,
        display: 'flex',
        justifyContent: 'space-around'
    },

    likesValue: {
        marginLeft: 10
    },

    commentsContainer: {
        borderBottom: "2px solid lightgray",
        margin: 25,
    },

    commentsTitle: {
        textAlign: "left"
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
    authorContainer: {
        margin: 25,
        textAlign: "center"
    },

});

export default useStyles;

