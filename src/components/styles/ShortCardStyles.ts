import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: "space-between",
        margin: "15px 0",
        padding: '15px 0',
        borderTop: "2px solid lightgray",

        "& a": {
            textDecoration: 'none',
        }
    },

    title: {
        textAlign: "center",

    },
    text: {
        textAlign: "justify",
    },
});

export default useStyles;

