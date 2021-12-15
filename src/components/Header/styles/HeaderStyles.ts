import { makeStyles } from '@mui/styles';
import { pink } from '@mui/material/colors';
import constatnts from '../../../constants/constants';

const useStyles = makeStyles({
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },

    logo: {
        width: '15%',
        display: 'flex',
        alignItems: 'center',
        color: pink[500],
        fontWeight: 800,
        fontSize: 30,
        textShadow: constatnts.textShadowIndigo,
    },
    buttons: {
        width: '65%',
        display: 'flex',
        alignItems: 'center',

        '& button': {
            display: 'block',
            margin: "0 15px",
            fontSize: 18,
            color: 'white',
        },

    },
    avatar: {
        width: '10%',
        display: "flex",
        justifyContent: "space-around",
        "& button": {
            color: "white",

        }
    },

    underline: {
        textDecoration: 'underline'
    }
})


export default useStyles;