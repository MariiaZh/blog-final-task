import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: "space-between",
        margin: 15,
        boxShadow: "5px 4px 4px gray, -3px 4px 4px gray",
        maxWidth: 450,
        minHeight: 450,
    },
    author: {
        marginBottom: 15,
    },
    text: {
        minHeight: 70
    },
    title: {
        textAlign: "center"
    },
    box: {
        display: "flex"
    },
    container: {
        marginBottom: 15,
        display: 'flex',
        justifyContent: 'space-around'
    },

    likesValue: {
        marginLeft: 10
    }
});

export default useStyles;

