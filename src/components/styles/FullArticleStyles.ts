import { makeStyles } from '@mui/styles';
import { pink } from '@mui/material/colors';

const useStyles = makeStyles({
    root: {
        width: "80%",
        margin: "0 20px",
        borderRight: "2px solid lightgray",
        borderLeft: "2px solid lightgray",
    },

    authorContainer: {
        margin: 25,
        textAlign: "center"
    },

    author: {
        margin: 15,
        color: pink[500],
    },

    title: {
        textAlign: "center",
        margin: 25
    },
    text: {
        margin: 25,
        textAlign: "justify"
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
    }
});

export default useStyles;

