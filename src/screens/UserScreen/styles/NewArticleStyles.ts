import { makeStyles } from '@mui/styles';
import constants from '../../../constants/constants';
import { pink, blue } from '@mui/material/colors';

const useStyles = makeStyles({

    root: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        width: `${constants.width * 7 / 10}px `,
        margin: `${Math.round(constants.height / 6)}px ${Math.round(constants.width * 0.17)}px `,
        background: 'white',
        borderRadius: 6,
        padding: 15,
        alignItems: "center",
        boxShadow: constants.boxShadowGray,
        zIndex: 133,
        "& h1": {
            margin: 0,
            color: pink[500],
            textShadow: `2px 2px 3px gray`,
        },
        "& div": {
            width: "98%",
            margin: 10,
        },
        "& label": {
            color: blue[700]
        },
        "& button": {
            display: "block",
            margin: 10,
        },
    },
    buttonWrapper: {
        display: 'flex',
        justifyContent: 'center'
    },
    alert: {
        backgroundColor: "whitesmoke",
        padding: 30,
    },
    warning: {
        textAlign: 'center',
        margin: 15,
        "& svg": {
            color: pink[500]
        }
    },
    buttons: {
        display: "flex",
        justifyContent: 'center'
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        minHeight: constants.height,
        zIndex: 22,
        background: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(174, 198, 230, 0))',
    },
});

export default useStyles;